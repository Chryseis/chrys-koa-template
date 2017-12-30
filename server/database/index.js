/**
 * Created by Administrator on 2017/12/30.
 */
const Sequelize = require('sequelize');
const db = require('../config/mysql.config');

const sequelize = new Sequelize(db.database, db.user, db.password, {
    dialect: db.dialect,
    port: db.port,
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    }
})

module.exports = sequelize;