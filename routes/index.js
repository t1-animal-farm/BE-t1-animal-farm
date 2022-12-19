const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const authRouter = require('./auth.routes');
const commentsRouter = require('./comments.routes');

router.use('/signup/', signupRouter);
router.use('/login/', loginRouter);
router.use('/auth/', authMiddleware, authRouter);
router.use('/comments', authMiddleware, commentsRouter);

module.exports = router;
