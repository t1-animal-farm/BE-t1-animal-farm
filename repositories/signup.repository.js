const { User } = require('../models');

class SignupRepository {
  checkId = async (email) => {
    console.log('email): ', email);

    const isExist = await User.findOne({ where: { email } });
    return isExist;
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
  findOne = async (nickname, email) => {
    const isExist = await User.findOne({ where: { nickname, email } });
    return isExist;
  };
}

module.exports = SignupRepository;
