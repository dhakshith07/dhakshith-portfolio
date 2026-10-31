const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Tools & Architecture']
  },
  proficiency: { type: Number, min: 0, max: 100, default: 85 },
  icon: { type: String, default: 'code' },
  badge: { type: String, default: '' }
});

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  location: { type: String, default: 'Remote / On-site' },
  description: { type: [String], required: true },
  technologies: { type: [String], default: [] },
  isCurrent: { type: Boolean, default: false }
});

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: 'Alex Mercer' },
    role: { type: String, required: true, default: 'Full-Stack Software Engineer' },
    tagline: { 
      type: String, 
      default: 'Crafting high-performance web applications, resilient distributed systems, and intuitive user experiences.'
    },
    location: { type: String, default: 'San Francisco, CA / Remote' },
    email: { type: String, default: 'alex.mercer.dev@example.com' },
    github: { type: String, default: 'https://github.com' },
    linkedin: { type: String, default: 'https://linkedin.com' },
    twitter: { type: String, default: 'https://x.com' },
    resumeUrl: { type: String, default: '#' },
    availability: { type: String, default: 'Available for full-time & freelance contracts' },
    bioParagraphs: {
      type: [String],
      default: [
        "I'm a passionate Full-Stack Developer with over 4+ years of hands-on experience building scalable web applications from scratch.",
        "Specializing in modern JavaScript/TypeScript ecosystems, React, Node.js, and MongoDB, I love bridging technical architecture with clean, human-centered UI design."
      ]
    },
    stats: {
      yearsExperience: { type: Number, default: 4 },
      projectsCompleted: { type: Number, default: 28 },
      happyClients: { type: Number, default: 15 },
      githubContributions: { type: Number, default: 1200 }
    },
    skills: [skillSchema],
    experiences: [experienceSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Profile', profileSchema);

