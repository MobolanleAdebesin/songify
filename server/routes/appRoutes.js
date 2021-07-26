const express = require('express');
const router = express.Router();
const searchRoutes = require('./SearchRoutes');


router.use('/search', searchRoutes);

// All the other routes 
module.exports = router;