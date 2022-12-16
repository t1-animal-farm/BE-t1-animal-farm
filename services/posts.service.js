const PostRepository = require('../repositories/posts.repository.js');
const { validatePost } = require('../middlewares/post.validate.js')

class PostService {
  postRepository = new PostRepository();

  findAllPost = async () => {
    try {
      let allPost = await this.postRepository.findAllPost();
      return allPost;
    } catch (err) {
      throw err;
    }
  };

  findPost = async () => {
    try {
      return await this.postRepository.findPost();
    } catch (err) {
      throw err;
    };
  };

  createPost = async (userId, text, images) => {
    try {

      validatePost(text);
      return await this.postRepository.createPost(userId, text, images);
    } catch (err) {
      throw err;
    };
  };

  updatePost = async () => {
    try {
      let post = await this.postRepository.updatePost();
      return post
    } catch (err) {
      throw err;
    };
  };

  deletePost = async () => {
    try {
      return await this.postRepository.deletePost();
    } catch (err) {
      throw err;
    }
  }
};

module.exports = PostService;