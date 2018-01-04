const logUtil = require('../utils').logUtil;

const connetHttplog = async (ctx, next) => {
    let start = +new Date();
    await next();
    let timespan = +new Date() - start;
    logUtil.logHttp(ctx, timespan);
}

module.exports = connetHttplog