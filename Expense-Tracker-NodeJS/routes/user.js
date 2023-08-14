const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.post('/signup',userController.postUserData);

router.post('/login',userController.postLoginUserData);

module.exports = router;