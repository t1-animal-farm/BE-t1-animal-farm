const { User } = require('../models');
const ErrorMiddleware = require('../middlewares/errorMiddleware');

class LoginRepository {
  login = async (email) => {
    try {
      const validate = await User.findOne({ where: { email } });
      return validate;
    } catch (err) {
      let error = new ErrorMiddleware(500, 'DB에러');
      throw error;
    }

  };
}

module.exports = LoginRepository;
