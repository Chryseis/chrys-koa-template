/**
 * Created by Administrator on 2017/12/29.
 */
const path = require('path');
const Koa = require('koa');
const webpack = require('webpack');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const jwtKoa = require('koa-jwt');
const util = require('util');
const opn = require('opn');
const webpackConfig = require('../app/config/webpack.dev.conf');
const {jwtConfig} = require('./config');
const router = require('./router');
const {resJson} = require('./middleware');

const verify = util.promisify(jwt.verify)
const secret = jwtConfig.secret;
const app = new Koa();
const compiler = webpack(webpackConfig)


app.use(bodyParser());

//jwt
app.use(jwtKoa({secret}).unless({
    path: [/^(?!\/api)/, /^\/api\/user\/getuser/]
}));

//Injecting resJson
app.use(resJson);

//route load
app.use(router.routes()).use(router.allowedMethods());

app.use(require('koa-connect-history-api-fallback')());

app.use(devMiddleware(compiler, {
    publicPath: '/'
}))

app.use(hotMiddleware(compiler, {}))


app.listen(3000, () => {
    console.log('app listening 3000...');
    opn('http://localhost:3000');
})

