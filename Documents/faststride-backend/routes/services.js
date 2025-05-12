const express = require('express');
const router = express.Router();

// Mock list of services
const services = [
  { id: 1, title: 'Cloud Consulting', description: 'Azure, AWS, and GCP setup and support' },
  { id: 2, title: 'Website Development', description: 'Full stack web development services' },
  { id: 3, title: 'IT Support', description: 'Remote and on-site IT troubleshooting' }
];

router.get('/', (req, res) => {
  res.json(services);
});

module.exports = router;
