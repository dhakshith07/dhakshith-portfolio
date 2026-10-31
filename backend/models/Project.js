const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true
    },
    category: {
      type: String,
      required: true,
      default: 'AI & Computer Vision'
    },
    technologies: {
      type: [String],
      required: true
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Detailed description is required'],
      trim: true
    },
    features: {
      type: [String],
      default: []
    },
    isExperimental: {
      type: Boolean,
      default: false
    },
    disclaimer: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    githubUrl: {
      type: String,
      default: ''
    },
    liveUrl: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    collection: 'projects' // Explicit collection name as requested
  }
);

module.exports = mongoose.model('Project', projectSchema);
