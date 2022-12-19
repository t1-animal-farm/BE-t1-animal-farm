const express = require('express');
const router = express.Router();

const SignupController = require('../controllers/signup.controller');
const signupController = new SignupController();
// router.post('/', signupController.validateRegister);
router.post('/', signupController.registerUser);
router.post('/checkId/:email', signupController.checkId);
module.exports = router;
