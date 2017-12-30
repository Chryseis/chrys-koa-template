/**
 * Created by Administrator on 2017/12/30.
 */
const Sequelize = require('sequelize');
const sequelize = require('../database');

const user = sequelize.define('t_user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    sex: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    birthday: Sequelize.DATE,
    createUser: {
        type: Sequelize.STRING,
        field: 'create_user'
    },
    createDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'create_date'
    }
});

module.exports = user;