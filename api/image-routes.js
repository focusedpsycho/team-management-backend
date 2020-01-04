const express = require('express');
const router = express.Router();
const imageUploadController = require('./controllers/imageUpload');
const imageUploadService = require('../services/imageUploadService');

router.post('/upload', imageUploadService.single('image'), imageUploadController.fetchImageUrl);



module.exports = router

