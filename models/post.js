const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      text: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      userId: {
        type: Sequelize.INTEGER(45),
        allowNull: false,
      },
      imageId: {
        type: Sequelize.INTEGER(45),
        allowNull: false,
      }
    },
      {
        sequelize,
        timestamps: false,
        modelName: 'Post',
        tableName: 'posts',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      })
  }
  static associate(db) {

  }
}