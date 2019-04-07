const express = require('express');
const router = express.Router();

// IMPORT ROUTES
const { AllEmojisController } = require('../controllers/emoji-controller');

// GET ALL EMOJIS
router.get('/all', AllEmojisController);

exports.router = router;