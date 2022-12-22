const SignupRepository = require('../repositories/signup.repository');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const ErrorMiddleware = require('../middlewares/errorMiddleware');

class SignupService {
  signupRepository = new SignupRepository(User);
  /** 중복확인 비지니스 로직:
   * repository에서 email을 findOne해서 조회한 값을 가지고 온다. DB에 email이 존재하면 existId도 존재한다.
   * existId가 있으면 중복으로 false 반환
   * existId가 없으면 고유한 이메일로 true 반환 **/

  checkId = async (email) => {
    const existId = await this.signupRepository.checkId(email);

    if (existId) {
      const errorMiddleware = new ErrorMiddleware(
        400,
        '중복된 이메일이 존재합니다'
      );
      throw errorMiddleware;
    } else if (existId === null) {
      return true;
    }
  };

  /** DB 검증: email, nickname은 unique type으로 설정 함
   * password bcrypt 라이브러리 사용해서 보안을 강화 한다
   */

  registerUser = async (email, nickname, password, confirmPassword) => {
    const existId = await this.signupRepository.findOne(nickname);
    if (existId) {
      const errorMiddleware = new ErrorMiddleware(
        400,
        '중복된 닉네임이 존재합니다'
      );
      throw errorMiddleware;
    }
    if (password !== confirmPassword) {
      const errorMiddleware = new ErrorMiddleware(
        400,
        '비밀번호가 일치하지 않습니다'
      );
      throw errorMiddleware;
    }

    const hashedPassword = await bcrypt.hash(password, 6);
    await this.signupRepository.registerUser(email, nickname, hashedPassword);
    return true;
  };
}
module.exports = SignupService;
