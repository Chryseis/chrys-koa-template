/**
 * Created by Administrator on 2018/1/4.
 */
const resJson = async (ctx, next) => {
    ctx.json = (obj) => {
        ctx.contentType = 'application/json';
        ctx.body = obj;
    }
    await next();
}

module.exports = resJson;