const logUtil = require('../utils').logUtil;

const connetHttplog = async (ctx, next) => {
    await next();
    logUtil.logHttp(ctx, next);
}

module.exports = connetHttplog