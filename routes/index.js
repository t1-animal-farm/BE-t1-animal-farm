const express = require('express');
const router = express.Router();

const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const logoutRouter = require('./logout.routes');
const mainRouter = require('./main.routes');
const authRouter = require('./auth.routes');
const commentsRouter = require('./comments.routes');

router.use('/signup/', signupRouter);
router.use('/login/', loginRouter);
router.use('/logout/', logoutRouter);
router.use('/main/', mainRouter);
router.use('/auth/', authRouter);
router.use('/comments', commentsRouter);

module.exports = router;
