/**
 * Created by Administrator on 2017/12/30.
 */
const Router = require('koa-router');
const userController = require('../controllers').user;


let user = new Router();

user.get('/getuser', userController.getUser);

user.put('/adduser', userController.addUser);

user.get('/getuserList', userController.getUserList);

user.delete('/removeuser', userController.deleteUser)


module.exports = user;