const express = require('express');
const morgan = require("morgan");
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const { sequelize } = require('./models');
const indexRouter = require("routes");
// const postRouter = require("./routes/post"); 라우터 불러오는 곳은 여기

const app = express();

app.set('port', process.env.PORT || 3000);
sequelize.sync({ force: false })
  .then(() => {
    console.log('DB 연결 되었습니다.')
  })
  .catch((err) => {
    console.log(err)
  })


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', indexRouter)

// app.use('/posts', postRouter); 라우터 연결은 이곳

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중')
});