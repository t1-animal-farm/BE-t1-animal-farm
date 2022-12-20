const express = require('express');
const router = express.Router();

const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const logoutRouter = require('./logout.routes');
const authRouter = require('./auth.routes');
const commentsRouter = require('./comments.routes');
const postRouter = require('./post.routes');

router.use('/signup/', signupRouter);
router.use('/login/', loginRouter);
router.use('/logout/', logoutRouter);
router.use('/auth/', authRouter);
router.use('/comments', commentsRouter);
router.use('/posts', postRouter);

module.exports = router;
