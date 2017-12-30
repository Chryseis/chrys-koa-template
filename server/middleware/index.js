/**
 * Created by Administrator on 2017/12/30.
 */

const resJson = async (ctx, next) => {
    ctx.json = (obj) => {
        ctx.contentType = 'application/json';
        ctx.body = obj;
    }
    await next();
}

module.exports = {
    resJson
}