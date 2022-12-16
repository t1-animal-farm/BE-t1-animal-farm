const express = require('express');
const router = express.Router();

const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const logoutRouter = require('./logout.routes');
const logoutRouter = require('./main.routes');
const logoutRouter = require('./auth.routes');
const logoutRouter = require('./post.routes');
const commentRouter = require('./comment.routes');

router.use('/signup/', signupRouter);
router.use('/login/', loginRouter);
router.use('/logout/', logoutRouter);
router.use('/main/', mainRouter);
router.use('/auth/', authRouter);
router.use('/posts/', postRouter);
router.use('/comments/', commentRouter);

module.exports = indexRouter;
