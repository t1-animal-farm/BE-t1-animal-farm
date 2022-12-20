const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const commentsRouter = require('./comments.routes');
const postRouter = require('./post.routes');

router.use('/signup/', signupRouter);
router.use('/login/', loginRouter);
router.use('/comments', commentsRouter);
router.use('/posts', postRouter);

module.exports = router;
