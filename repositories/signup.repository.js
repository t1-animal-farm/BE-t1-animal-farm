const { User } = require('../models');

class SignupRepository {
  checkId = async (email) => {
    const check = await User.findOne({ where: { email } });

    return check;
  };
  /** 해싱된 비밀번호가 데이터베이스에 저장된다  */
  registerUser = async (email, nickname, password) => {
    try {
      const signup = await User.create({ email, nickname, password });
      return signup;
    } catch (error) {
      return res.status(400).json({ errorMessage: '알수 없는 에러 발생 ' });
    }
  };
}

module.exports = SignupRepository;
