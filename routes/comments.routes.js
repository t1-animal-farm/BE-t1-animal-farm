const express = require('express');
const router = express.Router();
const controller = require('../controllers/comments.controller');
const jwtVerify = require('../middlewares/authMiddleware');

// 추가 - 코멘트 입력 라우터
router.post('/:postId',  jwtVerify, controller.insertComment);
// 추가 - 코멘트 조회 라우터
router.get('/:postId', jwtVerify, controller.findComment);
// 추가 - 코멘트 수정 라우터
router.put('/:commentId', jwtVerify, controller.updateComment);
// 추가 - 코멘트 삭제 라우터
router.delete('/:commentId', jwtVerify, controller.deleteComment);

module.exports = router