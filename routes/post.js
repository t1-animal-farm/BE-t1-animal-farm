const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const PostController = require('../controllers/posts.controller')
const postController = new PostController();

const upload = multer({ dest: path.join(__dirname, '../uploads/') })

router.get('/', postController.findAllPost);
router.post('/', upload.array('images', 5), postController.createPost);
router.patch('/', postController.updatePost);
router.delete('/', postController.deletePost);
// router.get('/:postId', postController)

module.exports = router;