const express = require('express');
const router = express.Router();

const PostController = require("../controllers/posts.controller");
const postController = new PostController();

router.get('/', postController.findAllPost);
router.post('/', postController.createPost);
router.get('/:postId', postController.findPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports = router