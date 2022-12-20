require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PW,
    database: 'sparta_week6_test',
    host: 'express-database.cmolhyykqhlv.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
  },

  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
