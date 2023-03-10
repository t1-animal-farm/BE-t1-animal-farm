const PostRepository = require('../repositories/posts.repository.js');
const { validatePost } = require('../middlewares/post.validate.js')
const uploadImageToS3 = require('../middlewares/uploadImageToS3.js');
const deleteImageToS3 = require('../middlewares/deleteImageToS3.js');
const ErrorMiddleware = require('../middlewares/errorMiddleware.js')

class PostService {
  postRepository = new PostRepository();

  findAllPost = async () => {
    try {
      let allPostImage = await this.postRepository.findAllPost();

      const allPost = allPostImage.allPost;
      const allImage = allPostImage.allImage;

      allPost.map((post) => {
        post.dataValues.imageUrl = [];
      })

      // 각 image row의 postId를 불러와서 allPost의 post row들과 매칭 시킵니다.
      allImage.map((image) => {
        let postId = image.dataValues.postId
        allPost.map((post) => {
          if (post.dataValues.postId === postId) {
            post.dataValues.imageUrl.push(image.dataValues.imageUrl);
          }
        })
      })
      return allPost;
    } catch (err) {
      throw err;
    };
  };

  findPost = async (postId) => {
    try {
      if (postId == 'undefined' || postId == '[object Object]') {
        const errorMiddleware = new ErrorMiddleware(401, ` ${postId} undefined 들어왔음`);
        throw errorMiddleware
      }
      let postImage = await this.postRepository.findPost(postId);

      const post = postImage.post;
      const image = postImage.image;

      let imagesUrl = [];
      // 각 image row의 postId를 불러와서 allPost의 post row들과 매칭 시키고.
      image.map((i) => {
        imagesUrl.push(i.dataValues.imageUrl);
      })
      post.dataValues.imageUrl = imagesUrl;
      return post;

    } catch (err) {
      throw err;
    };
  };

  createPost = async (userId, text, images) => {
    try {
      // let postId = Math.random().toString(36).substring(2, 15);
      await validatePost(text);
      let imageUrlName = await uploadImageToS3(images)
      return await this.postRepository.createPost(userId, text, imageUrlName);
    } catch (err) {
      throw err;
    };
  };

  updatePost = async (postId, userId, text, images) => {
    try {
      validatePost(text);
      if (postId == 'undefined' || postId == '[object Object]') {
        const errorMiddleware = new ErrorMiddleware(401, ` ${postId} undefined 들어왔음`);
        throw errorMiddleware
      }

      await this.postRepository.deleteImages(postId);
      await this.postRepository.deletePost(postId)
      let imageUrlName = await uploadImageToS3(images)
      let post = await this.postRepository.updatePost(postId, userId, text, imageUrlName);
      return post
    } catch (err) {
      throw err;
    };
  };

  deletePost = async (postId) => {
    try {

      if (postId == 'undefined' || postId == '[object Object]') {
        const errorMiddleware = new ErrorMiddleware(401, ` ${postId} undefined 들어왔음`);
        throw errorMiddleware
      }
      await this.postRepository.deleteImages(postId);
      await deleteImageToS3();
      return await this.postRepository.deletePost(postId);
    } catch (err) {
      throw err;
    };
  };


};

module.exports = PostService;