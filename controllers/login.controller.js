const LoginService = require('../services/login.service');
class LoginController {
  loginService = new LoginService();

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const loginValidation = await this.loginService.login(email, password);
      return res.status(201).json({ result: true, token: loginValidation });
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ result: false, errorMessage: error.errorMessage });
    }
  };
}
module.exports = LoginController;
