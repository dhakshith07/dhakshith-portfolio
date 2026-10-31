const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let isConnected = false;
let mongodServerInstance = null;

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

  // Try configured URI first (Atlas or running local instance)
  try {
    const conn = await mongoose.connect(mongoURI, {
      dbName: 'portfolio',
      serverSelectionTimeoutMS: 3000,
    });

    isConnected = true;
    console.log(`\x1b[32m%s\x1b[0m`, `✓ MongoDB Connected: ${conn.connection.host}:${conn.connection.port || ''} / Database: ${conn.connection.name}`);
    await autoSeedProjectsIfEmpty();
    return true;
  } catch (initialErr) {
    console.log(`\x1b[33m%s\x1b[0m`, `! Notice: External MongoDB not reachable (${initialErr.message}).`);
    
    // Fall back to spinning up embedded MongoMemoryServer so full MongoDB database operations work natively
    try {
      console.log('\x1b[36m%s\x1b[0m', '⚡ Initializing embedded MongoDB engine for full persistence...');
      mongodServerInstance = await MongoMemoryServer.create({
        instance: {
          dbName: 'portfolio',
        },
      });

      const memoryUri = mongodServerInstance.getUri();
      const conn = await mongoose.connect(memoryUri, {
        dbName: 'portfolio',
      });

      isConnected = true;
      console.log(`\x1b[32m%s\x1b[0m`, `✓ Embedded MongoDB Database Connected: ${conn.connection.name} at ${memoryUri}`);
      await autoSeedProjectsIfEmpty();
      return true;
    } catch (memErr) {
      isConnected = false;
      console.error('Failed to start embedded MongoDB:', memErr.message);
      return false;
    }
  }
};

const autoSeedProjectsIfEmpty = async () => {
  try {
    const Project = require('../models/Project');
    const { dhakshithProjects } = require('../data/dhakshithData');

    const count = await Project.countDocuments();
    if (count === 0) {
      const sanitized = dhakshithProjects.map(p => {
        const copy = { ...p };
        delete copy._id;
        return copy;
      });

      await Project.insertMany(sanitized);
      console.log(`\x1b[32m%s\x1b[0m`, `✓ Auto-seeded all 3 academic projects for Dhakshith Bavan S into MongoDB 'projects' collection.`);
    } else {
      console.log(`\x1b[34m%s\x1b[0m`, `✓ MongoDB 'projects' collection verified with ${count} existing project(s).`);
    }
  } catch (err) {
    console.error('Error during auto-seed:', err.message);
  }
};

const getDbStatus = () => isConnected;

module.exports = { connectDB, getDbStatus };
