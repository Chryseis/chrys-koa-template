/**
 * Created by Administrator on 2018/1/1.
 */
const Router = require('koa-router');

let common = new Router();
common.get('*', async (ctx) => {
    ctx.redirect(ctx.router.url('/'));
})
module.exports=common;