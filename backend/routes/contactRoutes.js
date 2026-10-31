const express = require('express');
const router = express.Router();
const {
  submitContact,
  getMessages
} = require('../controllers/contactController');

router.route('/')
  .post(submitContact);

router.route('/messages')
  .get(getMessages);

module.exports = router;

