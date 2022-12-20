const db = require('../models/index');

exports.insertComment = async (postId, comment, nickname) => {

    let comments = await db.Comment.create({
        postId: postId,
        comment: comment,
        nickname: nickname
    });
    return comments;
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
    return await db.Comment.update({
        comment: commentContents
    }, {
        where: {
            commentsId: commentId
        }
    });
}
