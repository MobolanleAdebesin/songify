const express = require('express');
const router = express.Router();



const searchController = require('../controller/SearchController');


router.get('/', searchController.index);
router.post('/post', searchController.indexPost);

module.exports = router;