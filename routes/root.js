const express = require('express');
const router = express.Router();

// IMPORT CONTROLLERS
const { RootController } = require('../controllers/root-controller');

//GET ROOT
router.get('/', RootController);

exports.router = router;