const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const PostController = require("../controllers/posts.controller");
const postController = new PostController();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname)
      cb(null, path.basename(file.originalname, ext) + '-' + Date.now() + ext)
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})


router.get('/', postController.findAllPost);
router.post('/', upload.array('images', 5), postController.createPost);
router.get('/:postId', postController.findPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports = router