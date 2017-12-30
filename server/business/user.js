/**
 * Created by Administrator on 2017/12/30.
 */
const {user} = require('../models');

const getUser = async (name) => {
    return await user.findOne({
        where: {
            name
        }
    })
}

module.exports={
    getUser
}