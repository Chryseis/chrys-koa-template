/**
 * Created by Administrator on 2017/12/30.
 */
const user = require('../service').user;
const {ResSuccModel, ResErrModel} = require('../infrastructure').ResModel;
const {dateToTimestamp, timestampToDate} = require('../utils').dateUtil;
const ResUser = require('./models/user');

const getUserList = async (ctx) => {
    try {
        let userList = await user.getUserList();
        let resResult = userList.map(user => (new ResUser(user.id, user.name, user.sex, dateToTimestamp(user.birthday), dateToTimestamp(user.createDate), user.createUser)));
        await ctx.json(new ResSuccModel(resResult));
    } catch (err) {
        throw err;
    }
}

const getUser = async (ctx) => {
    try {
        let userEnt = await user.getUser('allen');
        let resResult = new ResUser();
        resResult.id = userEnt.id;
        resResult.name = userEnt.name;
        resResult.sex = userEnt.sex;
        resResult.birthday = dateToTimestamp(userEnt.birthday);
        resResult.createDate = dateToTimestamp(userEnt.createDate);
        resResult.createUser = userEnt.createUser;
        await ctx.json(new ResSuccModel(resResult));
    } catch (err) {
        throw err;
    }
}

const addUser = async (ctx) => {
    try {
        let params = ctx.request.body;
        let userEnt = await user.addUser(params.name, params.sex);
        let resResult = new ResUser();
        resResult.id = userEnt.id;
        resResult.name = userEnt.name;
        resResult.sex = userEnt.sex;
        resResult.birthday = dateToTimestamp(userEnt.sex);
        resResult.createDate = dateToTimestamp(userEnt.createDate);
        resResult.createUser = userEnt.createUser;
        await ctx.json(new ResSuccModel(resResult));
    } catch (err) {
        throw err;
    }
}

const deleteUser = async (ctx) => {
    try {
        let params = ctx.request.body;
        console.log(params)
        await user.deleteUser(params.id);
        await ctx.json(new ResSuccModel({id: params.id}));
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getUserList,
    getUser,
    addUser,
    deleteUser
}