const jwtConfig = require('./jwt.config');
const mysqlConfig = require('./db.config');
const log4jsConfig = require('./log4js.config');
const serverConfig=require('./server.config');


module.exports = {
    jwtConfig,
    mysqlConfig,
    log4jsConfig,
    serverConfig
}