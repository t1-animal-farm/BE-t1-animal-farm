const LoginService = require('../services/login.service');
class LoginController {
  loginService = new LoginService();

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const loginValidation = await this.loginService.login(email, password);
      return res
        .status(201)
        .json({ message: '로그인 성공', token: loginValidation });
    } catch (error) {
      console.log(' controller error: ', error);
      return res
        .status(error.status || 500)
        .json({ errorMessage: error.message });
    }
  };
}
module.exports = LoginController;
