const Sequelize = require('sequelize');
const Post = require('./post');
const Comment = require('./comment');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

db.Post = Post;
db.User = User;
db.Comment = Comment;


// 여기에다가 db객체에 모델들을 넣어주세요.

Post.init(sequelize);
User.init(sequelize);

// 여기다가 각 모델의 init함수에 sequelize객체를 연결해주세요.
// 추가 - 코멘트 테이블 관련 설정 추가
Comment.init(sequelize);
Comment.associate(db);

module.exports = db;
