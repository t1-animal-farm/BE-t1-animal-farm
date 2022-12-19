const express = require('express');
const { User } = require('../models');
const router = express.Router();

//여기는 뭐하는 페이지 인가???????? 그냥 닉네임만 받으면 되는건가?
// router.get('/', authMiddleware, async (req, res, next)=> {
//     const getUserInfo= await User.findOne()
// });
module.exports = router;
