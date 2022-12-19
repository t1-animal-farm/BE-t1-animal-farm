const Sequelize = require('sequelize');

module.exports = class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      imageId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      fileName: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    },
      {
        sequelize,
        timestamps: false,
        modelName: 'Image',
        tableName: 'images',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      })
  }
  static associate(db) {

  }
}