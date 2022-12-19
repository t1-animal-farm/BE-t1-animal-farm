const LoginRepository = require('../repositories/login.repository');
const { User } = require('../models');
require('dotenv').config();
const crypto = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
class LoginService {
  loginRepository = new LoginRepository(User);
  /**비밀번호가 해싱되어 DB에 저장 되어있으니, 해싱 비밀번호와 req.body로 받은 비밀번호가 일치하는지 확인한다. bycrypt 라이브러리의 compare 메소드 사용 */
  login = async (email, password) => {
    const validate = await this.loginRepository.login(email);

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
        SECRET_KEY,
        { expiresIn: '1hr' }
      );

      console.log('token:', token);
      return token;
    }
  };
}

module.exports = LoginService;
