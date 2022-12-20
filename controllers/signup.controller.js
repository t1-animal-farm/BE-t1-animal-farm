const SignupService = require('../services/signup.service.js');

class SignupController {
  signupService = new SignupService();
  /** checkId 로직: 회원가입하기 전, 중복확인 버튼 클릭시 중복여부 확인
   * 이메일이 중복이면 result: false
   *  중복이 없으면 result :true 반환  **/
  checkId = async (req, res, next) => {
    const { email } = req.body;
    try {
      const data = await this.signupService.checkId(email);
      return res.status(200).json({ result: data });
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ result: false, errorMessage: error.errorMessage });
    }
  };
  /**이메일, 닉네임, 비밀번호 형식, 비밀번호확인 검증  */
  registerUser = async (req, res, next) => {
    const { email, nickname, password, confirmPassword } = req.body;

    try {
      const data = await this.signupService.registerUser(
        email,
        nickname,
        password,
        confirmPassword
      );

      return res.status(201).json({ result: data });
    } catch (error) {
      console.log('error: ', error);
      return res
        .status(error.status || 500)
        .json({ result: false, errorMessage: error.errorMessage });
    }
  };
}

module.exports = SignupController;
