const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  // For now, just log the message and respond
  console.log('Contact Form Submitted:', { name, email, message });

  res.status(200).json({ success: true, message: 'Your message has been received!' });
});

module.exports = router;
