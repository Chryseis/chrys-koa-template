/**
 * Created by Administrator on 2017/12/30.
 */
const user = require('../service').user;
const {ResSuccModel, ResErrModel} = require('../infrastructure').ResModel;

const getUser = async (ctx) => {
    try {
        let userEnt = await user.getUser('allen');
        await ctx.json(new ResSuccModel(userEnt));
    } catch (err) {
        throw err;
    }

}

module.exports = {
    getUser
}