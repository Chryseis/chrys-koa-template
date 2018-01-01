/**
 * Created by Administrator on 2017/12/30.
 */
const user = require('../service').user;
const {ResSuccModel, ResErrModel} = require('../infrastructure').ResModel;
const {dateToTimestamp, timestampToDate} = require('../utils').dateUtil;
const ResUser=require('./models/user');

const getUser = async (ctx) => {
    try {
        let userEnt = await user.getUser('allen');
        let resResult=new ResUser();
        resResult.id=userEnt.id;
        resResult.name=userEnt.name;
        resResult.sex=userEnt.sex;
        resResult.birthday=dateToTimestamp(userEnt.sex);
        resResult.createDate=dateToTimestamp(userEnt.createDate);
        resResult.createUser=userEnt.createUser;
        await ctx.json(new ResSuccModel(resResult));
    } catch (err) {
        throw err;
    }
}

const addUser = async (ctx) => {
    try {
        let params = ctx.request.body;
        let userEnt = await user.addUser(params.name, params.sex);
        let resResult=new ResUser();
        resResult.id=userEnt.id;
        resResult.name=userEnt.name;
        resResult.sex=userEnt.sex;
        resResult.birthday=dateToTimestamp(userEnt.sex);
        resResult.createDate=dateToTimestamp(userEnt.createDate);
        resResult.createUser=userEnt.createUser;
        await ctx.json(new ResSuccModel(resResult));
    } catch (err) {
        throw err
    }
}

module.exports = {
    getUser,
    addUser
}