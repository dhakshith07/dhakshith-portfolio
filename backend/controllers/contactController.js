const Contact = require('../models/Contact');
const { getDbStatus } = require('../config/db');

// @desc    Submit a contact form message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Strict Input Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Please enter your name.' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, error: 'Please enter your email address.' });
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address (e.g., name@domain.com).' });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ success: false, error: 'Message must be at least 10 characters long.' });
    }

    if (getDbStatus()) {
      const savedContact = await Contact.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : '',
        subject: subject ? subject.trim() : 'Portfolio Inquiry for Dhakshith',
        message: message.trim()
      });

      console.log(`[MongoDB contacts] Stored message from ${name} <${email}> (Doc ID: ${savedContact._id})`);

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been saved to the database. Dhakshith will get back to you shortly.',
        data: {
          id: savedContact._id,
          name: savedContact.name,
          email: savedContact.email,
          createdAt: savedContact.createdAt
        }
      });
    }

    return res.status(503).json({
      success: false,
      error: 'Database service is currently unavailable. Please email directly to dhakshithbavan1004@gmail.com'
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }
    console.error('Error in submitContact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process inquiry. Please try again or email directly.'
    });
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact/messages
// @access  Public / Admin
const getMessages = async (req, res) => {
  try {
    if (getDbStatus()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        source: 'database',
        count: contacts.length,
        data: contacts
      });
    }

    return res.status(503).json({
      success: false,
      error: 'Database is currently unavailable.'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error retrieving contact inquiries' });
  }
};

module.exports = {
  submitContact,
  getMessages
};
