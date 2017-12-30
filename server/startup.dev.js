/**
 * Created by Administrator on 2017/12/29.
 */
const path = require('path');
const Koa = require('koa');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware')
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const jwtKoa = require('koa-jwt');
const util = require('util');
const {jwtConfig} = require('./config');
const router = require('./router');
const {resJson} = require('./middleware');

const verify = util.promisify(jwt.verify)
const secret = jwtConfig.secret;
const app = new Koa();

app.use(bodyParser());

//jwt
app.use(jwtKoa({secret}).unless({
    path: [/^\/api\/user/]
}));

app.use(resJson);

//route load
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => {
    console.log('app listening 3000...')
})

