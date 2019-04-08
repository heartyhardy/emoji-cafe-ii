const express = require('express');
const router = express.Router();

// IMPORT ROUTES
const {
    AllEmojis,
    CreateEmoji,
    UpdateEmoji,
    DeleteEmoji
} = require('../controllers/emoji-controller');

// GET ALL EMOJIS
router.get('/all', AllEmojis);

// ADD AN EMOJI
router.post('/add', CreateEmoji);

// UPDATE AN EMOJI BY ID
router.patch('/update/:id', UpdateEmoji)

// DELETE AN EMOJI BY ID
router.delete('/del/:id', DeleteEmoji)

exports.router = router;