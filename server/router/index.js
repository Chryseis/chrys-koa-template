const Router = require('koa-router');
const user = require('./user');
const common = require('./common');

let router = new Router();
router.use('/api/user', user.routes(), user.allowedMethods());
process.env.NODE_EVN == 'production' && router.use('/', common.routes(), common.allowedMethods());

module.exports = router;