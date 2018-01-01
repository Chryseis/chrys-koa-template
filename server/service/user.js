/**
 * Created by Administrator on 2017/12/30.
 */
const {user} = require('../models');

const getUserList =async ()=>{

}

const getUser = async (name) => {
    return await user.findOne({
        where: {
            name
        }
    })
}

const addUser = async (name, sex) => {
    return await user.create({
        name,
        sex,
        createDate: new Date()
    });
}


const updateUser = async (name, sex) => {

}

const deleteUser = async (name) => {

}

module.exports = {
    getUser,
    addUser,
    updateUser,
    deleteUser
}