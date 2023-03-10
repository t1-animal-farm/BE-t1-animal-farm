const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const authMiddleware = require('../middlewares/authMiddleware');

const PostController = require("../controllers/posts.controller");
const postController = new PostController();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})


router.get('/', postController.findAllPost);
router.post('/', authMiddleware, upload.array('images', 5), postController.createPost);
router.get('/:postId', postController.findPost);
router.put('/:postId', authMiddleware, upload.array('images', 5), postController.updatePost);
router.delete('/:postId', authMiddleware, postController.deletePost);

module.exports = router