const express = require('express');
const router = express.Router();

// IMPORT ROUTES
const { AllEmojisController, CreateEmojiController } = require('../controllers/emoji-controller');

// GET ALL EMOJIS
router.get('/all', AllEmojisController);

// ADD AN EMOJI
router.post('/add', CreateEmojiController);

exports.router = router;