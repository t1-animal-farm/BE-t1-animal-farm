const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          unique: true,
          type: Sequelize.STRING(45),
        },
        nickname: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING(45),
        },
        password: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    this.hasMany(db.Post, { foreignKey: 'userId' });
    this.hasMany(db.Comment, { foreignKey: 'userId' });
    this.hasMany(db.Image, { foreignKey: 'userId' });
  }
};
