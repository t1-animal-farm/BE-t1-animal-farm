const db = require('../models/index');
const commentService = require('../services/comment.service');

exports.insertComment = async (req, res) => {
    const postId = req.params.postId;
    const email = req.body.email;
    const nickname = req.body.nickname;
    const comment = req.body.comment;

    if (email == null) {
        return res.status(400).send({ errorMessage: '이메일 파라미터를 입력해주세요.' });
    }

    if (nickname == null) {
        return res.status(400).send({ errorMessage: '닉네임 파라미터를 입력해주세요.' });
    }

    if (comment == null) {
        return res.status(400).send({ errorMessage: '코멘트 파라미터를 입력해주세요.' });
    }

    const post = await db.Post.findByPk(postId);
    if (post == null) {
        return res.status(400).send({ errorMessage: '포스트가 존재하지 않습니다.' });
    }

    // 현재 로그인 기능은 없으니 추후에 로그인 체크 후 에러 발생시킨다.
    // if (로그인이 안되어있으면) {
    //         return res.status(412).send({ errorMessage: '로그인 후 이용해주세요.' });
    // }

    let comments = commentService.insertComment(post.id, comment, nickname);

    res.sendStatus(200);
};

exports.findComment = async (req, res) => {
    const postId = req.params.postId;

    const post = await db.Post.findByPk(postId);
    if (post == null) {
        return res.status(400).send({ errorMessage: '포스트가 존재하지 않습니다.' });
    }

    const comments = await commentService.findAllCommentsByPostId(postId);
    res.send(comments);
}

exports.updateComment = async (req, res) => {
    const commentId = req.params.commentId;
    const commentContents = req.body.comment;

    if (commentContents == null) {
        return res.status(400).send({ errorMessage: '코멘트 파라미터를 입력해주세요.' });
    }

    // 현재 로그인 기능은 없으니 추후에 로그인 체크 후 에러 발생시킨다.
    // if (로그인이 안되어있으면) {
    //         return res.status(412).send({ errorMessage: '로그인 후 이용해주세요.' });
    // }

    const comment = await commentService.findCommentByPk(commentId);
    if (comment == null) {
        return res.status(400).send({ errorMessage: '코멘트 아이디에 해당하는 코멘트가 존재하지 않습니다.' });
    }

    await commentService.updateCommentById(commentId, commentContents);

    res.sendStatus(200);
}

exports.deleteComment = async (req, res) => {
    // 현재 로그인 기능은 없으니 추후에 로그인 체크 후 에러 발생시킨다.
    // if (로그인이 안되어있으면) {
    //         return res.status(412).send({ errorMessage: '로그인 후 이용해주세요.' });
    // }

    const commentId = req.params.commentId;

    const comment = await commentService.findCommentByPk(commentId);
    if (comment == null) {
        return res.status(400).send({ errorMessage: '코멘트 아이디에 해당하는 코멘트가 존재하지 않습니다.' });
    }

    await comment.destroy();
    res.sendStatus(200);
}

