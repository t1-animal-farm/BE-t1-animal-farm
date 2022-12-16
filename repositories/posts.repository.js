const Post = require('../models/post');

class PostRepository {
  findAllPost = async () => {
    try {
      let allPost = await Post.findAll();
      return allPost;
    } catch (err) {
      throw err;
    }
  };

  findPost = async () => {
    try {
      let data = await Post.findOne({
        where: {

        }
      });
      return data;
    } catch (err) {
      throw err;
    };
  };

  createPost = async (userId, text, images) => {
    try {
      let post = await Post.create({ userId, text, images })
      console.log(post);
      return post
    } catch (err) {
      throw err;
    };
  };

  updatePost = async () => {
    try {
      let post = await Post.update({})
      return post
    } catch (err) {
      throw err;
    };
  };

  deletePost = async () => {
    try {
      return await Post.destroy({})
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PostRepository;