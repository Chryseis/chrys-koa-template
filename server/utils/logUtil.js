/**
 * Created by Administrator on 2018/1/4.
 */
const log4js = require('log4js');

const httpLogger = log4js.getLogger();
const errorLogger = log4js.getLogger('err');
const otherLogger = log4js.getLogger('oth');
const lsrLogger = log4js.getLogger('lingsir');

const logHttp = (ctx, time) => {
    if (ctx.request.path.indexOf('/api') > -1) {
        httpLogger.info(formatHttp(ctx, time))
    }
}

const logErr = (ctx, err) => {
    errorLogger.error(ctx, err)
}

const logSql = (sql, time) => {
    otherLogger.info(formatSql(sql, time));
}

const logLingSir = (mobiles, resJson, isSucc) => {
    lsrLogger.info(formatLingSir(mobiles, resJson, isSucc));
}

const formatHttp = (ctx, time) => {
    const {request, response} = ctx;
    let logText = new String();
    logText += "*********** http start *******************" + "\n";
    logText += "\n" + "*********** http request ***********" + "\n";
    logText += "request method:" + request.method + "\n";
    logText += "request originalUrl:" + request.origin + "\n";
    logText += "request path:" + request.path + "\n";
    if (request.method == 'GET') {
        logText += "request query:" + JSON.stringify(request.query) + "\n";
    } else {
        logText += "request body:" + JSON.stringify(request.body) + "\n";
    }
    logText += "*********** http response ***********" + "\n";
    logText += "response status:" + response.status + "\n";
    logText += "response body:" + JSON.stringify(response.body) + "\n";
    logText += "http elapsed time:" + time + "ms" + "\n";
    logText += "*********** http end *******************" + "\n";
    return logText;
}

const formatErr = (ctx, err) => {
    let logText = new String();
    logText += "*********** err start ************" + "\n";
    logText += "\n" + ctx.request.url + "\n";
    logText += "err name: " + err.name + "\n";
    logText += "err message: " + err.message + "\n";
    logText += "err stack: " + err.stack + "\n";
    logText += "*********** err end ************" + "\n";
    return logText;
}

const formatSql = (sql, time) => {
    let logText = new String();
    logText += "***************************" + "\n";
    logText += "SQL: " + sql + "\n";
    logText += "SQL elapsed time " + time + " ms" + "\n";
    logText += "***************************" + "\n";
    return logText;
}

const formatLingSir = (mobiles, resJson, isSucc) => {
    let logText = new String();
    logText += "******************************" + "\n";
    logText += "moblie: " + mobiles + "\n";
    logText += "response: " + resJson + "\n";
    logText += "isSucc: " + isSucc + "\n";
    logText += "******************************" + "\n";
    return logText;
}


module.exports = {
    logHttp,
    logErr,
    logSql,
    logLingSir
}