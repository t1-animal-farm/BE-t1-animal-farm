const express = require('express');
const router = express.Router();
const controller = require('../controllers/comments.controller');

// 추가 - 코멘트 입력 라우터
router.post('/:postId', controller.insertComment);
// 추가 - 코멘트 조회 라우터
router.get('/:postId', controller.findComment);
// 추가 - 코멘트 수정 라우터
router.put('/:commentId', controller.updateComment);
// 추가 - 코멘트 삭제 라우터
router.delete('/:commentId', controller.deleteComment);

module.exports = router