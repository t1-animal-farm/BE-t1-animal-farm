
const Post = require('../models/post');
const Image = require('../models/image');
const deleteImageToS3 = require('../middlewares/deleteImageToS3');

class PostRepository {
  findAllPost = async () => {
    try {

      let allPost = await Post.findAll();
      let allImage = await Image.findAll();
      return { allPost, allImage };
    } catch (err) {
      throw err;
    }
  };

  findPost = async (postId) => {
    try {
      let image = await Image.findAll({
        where: {
          postId: postId
        }
      });
      let post = await Post.findOne({
        where: {
          postId: postId
        }
      });
      return { post, image };
    } catch (err) {
      throw err;
    };
  };

  createPost = async (userId, text, imageUrlName) => {
    try {
      console.log('hi')
      let post = await Post.create({ userId, text })

      imageUrlName.map(v => {
        Image.create({
          postId: post.dataValues.postId,
          imageUrl: v.location,
          fileName: v.fileName
        })
      })
      return post;
    } catch (err) {
      throw err;
    };
  };

  updatePost = async (postId, userId, text, imageUrlName) => {
    try {

      let post = await Post.create({ postId, userId, text })
      imageUrlName.map(v => {
        Image.create({
          postId: post.dataValues.postId,
          imageUrl: v.location,
          fileName: v.fileName
        })
      })
      return post;

    } catch (err) {
      throw err;
    };
  };

  deletePost = async (postId) => {
    try {
      return await Post.destroy({
        where: {
          postId: postId
        }
      })
    } catch (err) {
      throw err;
    };
  };

  deleteImages = async (postId) => {
    const images = await Image.destroy({
      where: {
        postId: postId
      }
    });

    return images
  }

  findAllImage = async (postId) => {
    const images = await Image.findAll({
      where: {
        postId: postId
      }
    });
    return images
  }
};

module.exports = PostRepository;