const SignupRepository = require('../repositories/signup.repository');
const { User } = require('../models');
const bcrypt = require('bcrypt');
class SignupService {
  signupRepository = new SignupRepository(User);
  /** 중복확인 비지니스 로직:
   * repository에서 email을 findOne해서 조회한 값을 가지고 온다. DB에 email이 존재하면 existId도 존재한다.
   * existId가 있으면 중복으로 false 반환
   * existId가 없으면 고유한 이메일로 true 반환 **/

  checkId = async (email) => {
    const existId = await this.signupRepository.checkId(email);
    console.log('existId: ', typeof existId);

    if (existId) {
      return false;
    } else if (!existId) {
      return true;
    }
  };

  /** DB 검증: email, nickname은 unique type으로 설정 함
   * password bcrypt 라이브러리 사용해서 보안을 강화 한다
   */

  registerUser = async (email, nickname, password) => {
    const hashedPassword = await bcrypt.hash(password, 6);
    const registerConfirm = await this.signupRepository.registerUser(
      email,
      nickname,
      hashedPassword
    );
  };
}
module.exports = SignupService;
