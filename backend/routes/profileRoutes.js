const express = require('express');
const router = express.Router();
const {
  getProfile,
  getSkills,
  getCertifications,
  getEducation
} = require('../controllers/profileController');

router.get('/', getProfile);
router.get('/skills', getSkills);
router.get('/certifications', getCertifications);
router.get('/education', getEducation);

module.exports = router;
