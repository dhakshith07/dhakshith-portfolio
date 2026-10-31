const Project = require('../models/Project');
const { getDbStatus } = require('../config/db');
const { dhakshithProjects } = require('../data/dhakshithData');

// @desc    Get all academic projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const { category, search } = req.query;

    if (getDbStatus()) {
      const filter = {};
      if (category && category !== 'All') {
        filter.category = category;
      }
      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: 'i' } },
          { summary: { $regex: search, $options: 'i' } },
          { technologies: { $in: [new RegExp(search, 'i')] } }
        ];
      }

      const projects = await Project.find(filter).sort({ order: 1, createdAt: 1 });
      return res.status(200).json({
        success: true,
        source: 'database',
        count: projects.length,
        data: projects
      });
    }

    // Fallback if database is offline
    let filtered = [...dhakshithProjects];
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    return res.status(200).json({
      success: true,
      source: 'local-resume-data',
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    console.error('Error in getProjects:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching academic projects'
    });
  }
};

// @desc    Get project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    if (getDbStatus()) {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ success: false, error: `Project not found with id '${id}'` });
      }
      return res.status(200).json({ success: true, data: project });
    }

    const project = dhakshithProjects.find(p => p._id === id || p.title.toLowerCase().includes(id.toLowerCase()));
    if (!project) {
      return res.status(404).json({ success: false, error: `Project not found with id '${id}'` });
    }

    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: `Invalid project ID format: '${req.params.id}'`
      });
    }
    res.status(500).json({ success: false, error: 'Server error retrieving project details' });
  }
};

// @desc    Create a new project (Admin protected)
// @route   POST /api/projects
// @access  Private (Admin)
const createProject = async (req, res) => {
  try {
    const {
      title,
      category,
      technologies,
      summary,
      description,
      features,
      isExperimental,
      disclaimer,
      githubUrl,
      liveUrl,
      image,
      order
    } = req.body;

    if (!title || !summary || !description) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title, summary, and description.'
      });
    }

    const techArray = Array.isArray(technologies)
      ? technologies
      : (technologies ? technologies.split(',').map(t => t.trim()) : []);

    const featuresArray = Array.isArray(features)
      ? features
      : (features ? features.split('\n').map(f => f.trim()).filter(Boolean) : []);

    if (getDbStatus()) {
      const newProj = await Project.create({
        title,
        category: category || 'AI & Computer Vision',
        technologies: techArray,
        summary,
        description,
        features: featuresArray,
        isExperimental: !!isExperimental,
        disclaimer: disclaimer || '',
        githubUrl: githubUrl || '',
        liveUrl: liveUrl || '',
        image: image || '',
        order: order || 0
      });

      return res.status(201).json({
        success: true,
        message: 'Project created successfully in MongoDB',
        data: newProj
      });
    }

    return res.status(503).json({
      success: false,
      error: 'Database unavailable: Cannot persist new project.'
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }
    res.status(500).json({ success: false, error: error.message || 'Error creating project' });
  }
};

// @desc    Update an existing project (Admin protected)
// @route   PUT /api/projects/:id
// @access  Private (Admin)
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (getDbStatus()) {
      const updated = await Project.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updated) {
        return res.status(404).json({ success: false, error: `Project not found with id '${id}'` });
      }
      return res.status(200).json({
        success: true,
        message: 'Project updated successfully in MongoDB',
        data: updated
      });
    }

    return res.status(503).json({
      success: false,
      error: 'Database unavailable: Cannot update project.'
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: `Invalid project ID format: '${req.params.id}'`
      });
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }
    res.status(500).json({ success: false, error: error.message || 'Error updating project' });
  }
};

// @desc    Delete a project (Admin protected)
// @route   DELETE /api/projects/:id
// @access  Private (Admin)
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (getDbStatus()) {
      const deleted = await Project.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: `Project not found with id '${id}'` });
      }
      return res.status(200).json({
        success: true,
        message: `Project '${deleted.title}' deleted successfully from MongoDB`
      });
    }

    return res.status(503).json({
      success: false,
      error: 'Database unavailable: Cannot delete project.'
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: `Invalid project ID format: '${req.params.id}'`
      });
    }
    res.status(500).json({ success: false, error: 'Error deleting project' });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
