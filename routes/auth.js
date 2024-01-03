// const express = require('express');
// const { signup, signin, signout } = require('../controllers/auth');
// // const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validator/auth');
// const router = express.Router();


// // router.post('/signup',validateSignupRequest, isRequestValidated, signup);
// // router.post('/signin',validateSigninRequest, isRequestValidated, signin);
// router.post('/signup', signup);
// router.post('/signin', signin);
// router.post('/signout', signout)

// // router.post('/profile', requireSignin, (req, res) => {
// //     res.status(200).json({ user: 'profile' })
// // });

// module.exports = router;




import express from 'express';
import { signup, signin, signout } from '../controllers/auth.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);

export default router;
