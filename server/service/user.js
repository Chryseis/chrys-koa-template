/**
 * Created by Administrator on 2017/12/30.
 */
const {user} = require('../models');

const getUserList = async () => {
    return await user.findAll();
}

const getUser = async (name) => {
    return await user.findOne({
        where: {
            name
        }
    })
}

const addUser = async (name, sex, birthday) => {
    return await user.create({
        name,
        sex,
        birthday,
        createDate: new Date()
    });
}


const updateUser = async (name, sex) => {

}

const deleteUser = async (id) => {
    return await user.destroy({
        where: {
            id
        }
    })
}

module.exports = {
    getUserList,
    getUser,
    addUser,
    updateUser,
    deleteUser
}