const PostService = require("../services/posts.service");
const uploadImageToS3 = require("../middlewares/uploadImageToS3");


class PostController {
  postService = new PostService();

  findAllPost = async (req, res, next) => {
    try {
      let allPostImage = await this.postService.findAllPost();
      return res.status(200).json({ data: allPostImage })
    } catch {
      return res.status(500).json({ errorMessage: '알 수 없는 오류' })
    }
  };

  findPost = async (req, res, next) => {
    try {
      let postId = req.params.postId
      let post = await this.postService.findPost(postId);
      return res.status(200).json({ data: post });
    } catch (err) {
      return res.status(err.status).json({ errorMessage: err.errorMessage })
    };
  };

  createPost = async (req, res) => {
    try {
      let userId = req.body.userId
      let text = req.body.text;
      let images = req.files ?? [];

      await this.postService.createPost(userId, text, images)
      res.status(200).json({ message: '게시글 작성 성공' })
    } catch (err) {
      // res.status(err.status).json({ errorMessage: err.errorMessage })
      return res.status(err.status).json({ errorMessage: err.errorMessage })
    };
  };

  updatePost = async (req, res) => {
    try {
      let postId = req.params.postId;
      let userId = res.locals.user.userId;
      let text = req.body.text;
      let images = req.body.images;

      await this.postService.updatePost(postId, userId, text, images);
      res.status(200).json({ message: '게시글 작성 성공' });
    } catch (err) {
      res.status(err.status).json({ errorMessage: err.errorMessage })
    };
  };

  deletePost = async (req, res) => {
    try {
      let postId = req.params.postId
      await this.postService.deletePost(postId);
      res.status(200).json({ message: '게시글 삭제 성공' });
    } catch (err) {
      res.status(err.status).json({ errorMessage: err.errorMessage })
    };
  };
}

module.exports = PostController;