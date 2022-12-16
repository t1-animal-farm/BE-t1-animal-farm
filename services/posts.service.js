const PostRepository = require('../repositories/posts.repository');
const Post = require("../models/post");
const { validatePost } = require('../middlewares/post.validate');
const ErrorMiddleware = require('../middlewares/errorMiddleware');

class PostService {
  postRepository = new PostRepository(Post);

  findAllPost = async () => {
    try {
      let allPost = await this.postRepository.findAllPost({});
      return allPost;
    } catch (err) {
      throw err;
    };

  };

  createPost = async (userId, text, images) => {
    try {
      validatePost(text);
      return await this.postRepository.createPost(userId, text, images);
    } catch (err) {
      throw err
    };
  };

  updatePost = async (postId, userId, text, images) => {
    try {
      validatePost(title, content);
      await this.postRepository.updatePost(postId, userId, text, images);
    } catch (err) {
      throw err
    };
  };

  deletePost = async (postId) => {
    try {

    } catch (err) {

    }
  }
};

module.exports = PostService;