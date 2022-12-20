const { User } = require('../models');

class SignupRepository {
  checkId = async (email) => {
    const check = await User.findOne({ where: { email } });

    return check;
  };
  /** 해싱된 비밀번호가 데이터베이스에 저장된다  */
  registerUser = async (email, nickname, hashedPassword) => {
    const signup = await User.create({
      email,
      nickname,
      password: hashedPassword,
    });

    return signup;
  };
}

module.exports = SignupRepository;
