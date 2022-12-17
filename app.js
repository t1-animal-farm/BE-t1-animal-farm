const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const commentRouter = require('./routes/comments');

const { sequelize } = require('./models');
const indexRouter = require('./routes/index');

const app = express();

app.set('port', process.env.PORT || 3000);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('DB 연결 되었습니다.');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// app.use('/posts', postRouter); 라우터 연결은 이곳
app.use('/api', indexRouter);
// 추가 - 코멘트 관련 라우터 추가
app.use('/api/comments', commentRouter);

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
