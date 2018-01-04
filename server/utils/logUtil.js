/**
 * Created by Administrator on 2018/1/4.
 */
const log4js = require('log4js');

const httpLogger = log4js.getLogger();
const errorLogger = log4js.getLogger('err');
const otherLogger = log4js.getLogger('oth');

const logHttp = (ctx, time) => {
    if (ctx.request.path.indexOf('/api') > -1) {
        httpLogger.info(formatHttp(ctx, time))
    }
}

const formatHttp = (ctx, time) => {
    const {request, response} = ctx;
    let logText = new String();
    logText += "\n" + "*********** http start ***********" + "\n";
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
    return logText;
}


module.exports = {
    logHttp
}