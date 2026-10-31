const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDB, getDbStatus } = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration to allow local frontend and production deployments
const clientUrls = (process.env.CLIENT_URL || '')
  .split(',')
  .map(u => u.trim())
  .filter(Boolean);

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  ...clientUrls
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      // Allow local development, configured CLIENT_URL, or any *.vercel.app deployment
      if (
        process.env.NODE_ENV === 'development' ||
        allowedOrigins.indexOf(origin) !== -1 ||
        origin.endsWith('.vercel.app')
      ) {
        return callback(null, true);
      }
      return callback(new Error('CORS not allowed for this origin: ' + origin));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key']
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Health Check & System Status Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    portfolioOwner: 'Dhakshith Bavan S',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    database: {
      connected: getDbStatus(),
      name: 'portfolio',
      type: 'MongoDB Atlas / Local'
    },
    service: 'Dhakshith Bavan S – Personal Portfolio REST API'
  });
});

// Mount Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));

// Root route
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; padding: 40px; background: #080c16; color: #f3f4f6; min-height: 100vh;">
      <h1 style="color: #6366f1;">🚀 Dhakshith Bavan S – Portfolio REST API</h1>
      <p style="color: #94a3b8;">AI/ML Developer | Computer Vision Enthusiast | B.Tech CSE (AI) Student</p>
      <ul>
        <li><a style="color: #38bdf8;" href="/api/health">/api/health</a> - API Status & Database Health</li>
        <li><a style="color: #38bdf8;" href="/api/profile">/api/profile</a> - Complete Resume Profile Data</li>
        <li><a style="color: #38bdf8;" href="/api/projects">/api/projects</a> - Academic Projects</li>
        <li><a style="color: #38bdf8;" href="/api/contact/messages">/api/contact/messages</a> - Contact Inquiries</li>
      </ul>
    </div>
  `);
});

// 404 Route Not Found Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `API route '${req.originalUrl}' not found.`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\x1b[36m%s\x1b[0m`, `======================================================`);
  console.log(`\x1b[32m%s\x1b[0m`, `✓ Dhakshith Bavan S Portfolio API running on port ${PORT}`);
  console.log(`\x1b[34m%s\x1b[0m`, `✓ Endpoints available at: http://localhost:${PORT}/api`);
  console.log(`\x1b[36m%s\x1b[0m`, `======================================================`);
});
