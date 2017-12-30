/**
 * Created by Administrator on 2017/12/30.
 */
const user = require('../business').user;
const {ResSuccModel, ResErrModel} = require('../infrastructure').ResModel;

const getUser = async (ctx) => {
    let userEnt = await user.getUser('allen');
    await ctx.json(new ResSuccModel(userEnt));
}

module.exports={
    getUser
}