const express = require('express');

const router = express.Router();

const forgetPasswordController = require('../controllers/forgetpassword');
const userAuthenticaion = require('../middlewares/authenticate');

router.post('/forgetpassword', forgetPasswordController.forgetPassword);

router.get('/resetpassword/:id',forgetPasswordController.resetPassword);

router.get('/updatepassword/:id',forgetPasswordController.updatePassword);


module.exports = router;