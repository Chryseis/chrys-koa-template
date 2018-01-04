/**
 * Created by Administrator on 2017/12/30.
 */
const Sequelize = require('sequelize');
const db = require('../config').mysqlConfig;

let sequelize;
if (!sequelize) {
    sequelize = new Sequelize(db.database, db.user, db.password, {
        dialect: db.dialect,
        port: db.port,
        pool: {
            max: 1000,
            idle: 30000,
            acquire: 60000,
        },
        timezone: '+08:00',
        define: {timestamps: false, freezeTableName: true}
    })
}

module.exports = sequelize;