const db = require('../models/index');

exports.insertComment = async (postId, comment, nickname) => {
    await db.Comment.create({
        postId: postId,
        comment: comment,
        nickname: nickname
    });
}

exports.findAllCommentsByPostId = async (postId) => {
    return await db.Comment.findAll({
        attributes: ['commentsId', 'nickname', 'comment', 'updatedAt'],
        where: {
            postId: postId
        }
    });
}

exports.findCommentByPk = async (commentId) => {
    return await db.Comment.findByPk(commentId);
}

exports.updateCommentById = async (commentId, commentContents) => {
    await db.Comment.update({
        comment: commentContents
    }, {
        where: {
            commentsId: commentId
        }
    });
}
