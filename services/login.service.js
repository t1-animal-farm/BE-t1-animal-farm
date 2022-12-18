const LoginRepository = require('../repositories/login.repository');
const { User } = require('../models');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
class LoginService {
  loginRepository = new LoginRepository(User);

  login = async (email, password) => {
    const validate = await this.loginRepository.login(email);
    console.log('validate: ', validate);

    if (!validate || password !== validate.password) {
      const error = new Error('이메일 또는 비밀번호가 일치하지 않습니다');
      error.status = 412;
      throw error;
    }
    if (validate && password === validate.password) {
      const token = jwt.sign(
        {
          userId: validate.userId,
          email: validate.email,
          nickname: validate.nickname,
        },
        SECRET_KEY
      );

      console.log('token:', token);
      return token;
    }
  };
}

module.exports = LoginService;
