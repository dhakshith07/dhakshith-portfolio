const { dhakshithProfile } = require('../data/dhakshithData');

// @desc    Get Dhakshith's personal profile, education, skills, internship, certifications, languages
// @route   GET /api/profile
// @access  Public
const getProfile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: dhakshithProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error retrieving profile information'
    });
  }
};

// @desc    Get technical skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: dhakshithProfile.skillsCategories
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error retrieving skills' });
  }
};

// @desc    Get certifications
// @route   GET /api/certifications
// @access  Public
const getCertifications = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: dhakshithProfile.certificationsByOrg
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error retrieving certifications' });
  }
};

// @desc    Get education
// @route   GET /api/education
// @access  Public
const getEducation = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: dhakshithProfile.education
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error retrieving education history' });
  }
};

module.exports = {
  getProfile,
  getSkills,
  getCertifications,
  getEducation
};
