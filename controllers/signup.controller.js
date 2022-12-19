const SignupService = require('../services/signup.service.js');

class SignupController {
  signupService = new SignupService();
  /** checkId 로직: 회원가입하기 전, 중복확인 버튼 클릭시 중복여부 확인
   * 이메일이 중복이면 result: false
   *  중복이 없으면 result :true 반환  **/
  checkId = async (req, res, next) => {
    const { email } = req.body;
    console.log('controller email', email);
    try {
      const data = await this.signupService.checkId(email);

      return res.status(200).json({ result: data });
    } catch (error) {
      return res.status(400).json({ errorMessage: '알수 없는 에러 발생' });
    }
  };
  /**이메일, 닉네임, 비밀번호 형식, 비밀번호확인 검증  */
  // validateRegister = async (req, res, next) => {
  //   const { password, confirmPassword } = req.body;

  //   try {
  //     if (password !== confirmPassword) {
  //       const error = new Error();
  //       error.status = 412;
  //       throw error;
  //     }
  //     if (password === confirmPassword) {
  //       return res.status(200).json(true);
  //     }
  //   } catch (error) {
  //     return res.status(error.status || 500);
  //   }
  // };

  registerUser = async (req, res, next) => {
    const { email, nickname, password, confirmPassword } = req.body;
    console.log(
      'email, nickname, password',
      email,
      nickname,
      password,
      confirmPassword
    );
    if (password !== confirmPassword) {
      return res
        .status(412)
        .json({ errorMessage: '비밀번호가 일치 하지 않습니다' });
    }
    try {
      const signup = await this.signupService.registerUser(
        email,
        nickname,
        password
      );

      return res.status(201).json({ message: '성공' });
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).json({ errorMessage: '알수 없는 에러 발생' });
    }
  };
}

module.exports = SignupController;
