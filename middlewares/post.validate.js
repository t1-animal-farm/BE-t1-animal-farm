const ErrorMiddleware = require("../middlewares/errorMiddleware");

exports.validatePost = (text) => {
  console.log('text', text);
  console.log(typeof text);
  if (text == '' || text == undefined || text == 'undefined') {
    const errorMiddleware = new ErrorMiddleware(401, '포스트 형식이 일치하지 않습니다.');
    throw errorMiddleware
  }
  return;
};