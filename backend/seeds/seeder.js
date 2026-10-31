const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('../models/Project');
const Contact = require('../models/Contact');
const { dhakshithProjects } = require('../data/dhakshithData');

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

const importData = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('\x1b[36m%s\x1b[0m', `Connected to MongoDB at ${mongoURI}`);

    // Clear existing projects
    await Project.deleteMany({});
    console.log('\x1b[33m%s\x1b[0m', 'Existing projects cleared.');

    const sanitizedProjects = dhakshithProjects.map(p => {
      const copy = { ...p };
      delete copy._id;
      return copy;
    });

    const created = await Project.insertMany(sanitizedProjects);
    console.log('\x1b[32m%s\x1b[0m', `✓ Successfully seeded ${created.length} academic projects for Dhakshith Bavan S into 'projects' collection!`);

    process.exit(0);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('\x1b[36m%s\x1b[0m', 'Connected to MongoDB...');

    await Project.deleteMany({});
    await Contact.deleteMany({});

    console.log('\x1b[31m%s\x1b[0m', '✓ All portfolio collections wiped from MongoDB.');
    process.exit(0);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
