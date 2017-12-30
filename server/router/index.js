const Router = require('koa-router');
const user=require('./user');

let router = new Router();
router.use('/api/user',user.routes(),user.allowedMethods());

module.exports = router;