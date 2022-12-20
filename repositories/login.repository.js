const { User } = require('../models');
class LoginRepository {
  login = async (email) => {
    const validate = await User.findOne({ where: { email } });
    return validate;
  };
}

module.exports = LoginRepository;
