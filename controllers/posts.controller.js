const PostService = require("../services/posts.service");

class PostController {
  postService = new PostService();

  findAllPost = async (req, res, next) => {
    try {
      let allPost = await this.postService.findAllPost();
      return res.status(200).json({ data: allPost })
    } catch {
      return res.status(500).json({ errorMessage: '알 수 없는 오류' })
    }
  };

  createPost = async (req, res) => {
    try {
      let userId = req.body.userId
      let text = req.body.text;
      let images = req.files ?? [];
      console.log(images)

      await this.postService.createPost(userId, text, images)
      res.status(200).json({ message: '게시글 작성 성공' })
    } catch (err) {
      res.status(err.status).json({ errorMessage: err.errorMessage })
    };
  };

  updatePost = async (req, res) => {
    try {
      postId = req.params.postId;
      userId = res.locals.user.userId;
      text = req.body.text;
      images = req.body.images;

      await this.postService.updatePost(postId, userId, text, images);

    } catch (err) {
      res.status(err.status).json({ errorMessage: err.errorMessage })
    };
  };

  deletePost = async (req, res) => {
    try {

    } catch (err) {

    };
  };

}

module.exports = PostController;