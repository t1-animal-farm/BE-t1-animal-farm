const Sequelize = require('sequelize');

/**
 * 코멘트 DB 설정
 * @type {Comment}
 */
module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            commentsId: {
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            comment: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            nickname: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'Comments',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    /**
     * 게시물과 연관성 지음
     * 하나의 게시물은 여러개의 코멘트를 가짐 (hasMany)
     * 하나의 코멘트는 게시문의 속해있음 (belongTo)
     * @param db
     */
    static associate(db) {
        db.Post.hasMany(db.Comment, {
            foreignKey: 'postId'
        });
        db.Comment.belongsTo(db.Post, {
            foreignKey: 'postId'
        });
    }
}
