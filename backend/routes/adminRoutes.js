const express = require('express');
const router = express.Router();
const { getAllTickets } = require('../controllers/adminController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getAllTickets);

module.exports = router;
