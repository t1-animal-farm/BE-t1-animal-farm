const LoginRepository = require('../repositories/login.repository');
const { User } = require('../models');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const ErrorMiddleware = require('../middlewares/errorMiddleware');

class LoginService {
  loginRepository = new LoginRepository(User);
  /**비밀번호가 해싱되어 DB에 저장 되어있으니, 해싱 비밀번호와 req.body로 받은 비밀번호가 일치하는지 확인한다. bycrypt 라이브러리의 compare 메소드 사용 */
  login = async (email, password) => {
    const validate = await this.loginRepository.login(email);
    const passwordCheck = await bcrypt.compare(password, validate.password);
    console.log('passwordCheck: ', passwordCheck);

    if (!validate || !passwordCheck) {
      const errorMiddleware = new ErrorMiddleware(
        412,
        '이메일 또는 비밀번호가 일치하지 않습니다'
      );
      throw errorMiddleware;
    }

    const token = jwt.sign(
      {
        userId: validate.userId,
        email: validate.email,
        nickname: validate.nickname,
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    console.log('token:', token);
    return token;
  };
}

module.exports = LoginService;
