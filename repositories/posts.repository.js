const ErrorMiddleware = require('../middlewares/errorMiddleware');

class PostRepository {
  constructor(Post) {
    this.postModel = Post;
  };

  findAllPost = async () => {
    try {
      let allPost = await this.postModel.findAll({});
      return allPost;
    } catch (err) {
      const errorMiddleware = new ErrorMiddleware(500, 'DB 오류');
      throw errorMiddleware;
    }

  };

  createPost = async (userId, text, images) => {
    try {
      return await this.postModel.createPost({
        userId, text, images
      });
    } catch (err) {
      const errorMiddleware = new ErrorMiddleware(500, 'DB 오류');
      throw errorMiddleware;
    };
  };

  updatePost = async (text, images) => {
    try {

    } catch (err) {

    }
  };

  deletePost = async () => {
    try {

    } catch (err) {

    };
  };

}

module.exports = PostRepository;