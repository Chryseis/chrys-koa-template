/**
 * Created by Administrator on 2017/12/29.
 */
const path = require('path');
const Koa = require('koa');
const Static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const jwtKoa = require('koa-jwt');
const util = require('util');
const {jwtConfig, serverConfig} = require('./config');
const router = require('./router');
const {resJson} = require('./middleware');

const verify = util.promisify(jwt.verify)
const secret = jwtConfig.secret;
const app = new Koa();

app.on('error', (err, ctx) => {
    console.log(err)
})

app.use(bodyParser());

//jwt
app.use(jwtKoa({secret}).unless({
    path: [/^(?!\/api)/, /^\/api\/user/]
}));

//Injecting resJson
app.use(resJson);

//static file
app.use(Static(path.resolve(__dirname, serverConfig.staticPath)));

//route load
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
    console.log('app listening 3001...')
})