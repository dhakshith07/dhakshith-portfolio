const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

// Public read routes
router.get('/', getProjects);
router.get('/:id', getProjectById);

// Protected administrative management routes
router.post('/', adminAuth, createProject);
router.put('/:id', adminAuth, updateProject);
router.delete('/:id', adminAuth, deleteProject);

module.exports = router;
