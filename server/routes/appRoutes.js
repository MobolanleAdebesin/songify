const express = require('express');
const router = express.Router();
const searchRoutes = require('./SearchRoutes');


router.use('/search', searchRoutes);


module.exports = router;