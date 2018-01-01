/**
 * Created by Administrator on 2018/1/1.
 */
const path = require('path');
const fs = require('fs');
const Router = require('koa-router');

let common = new Router();
common.get('*', async (ctx) => {
    let html = await  new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '../static/index.html'), "binary", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    });
    ctx.response.contentType = 'text/html';
    ctx.body = html;
})
module.exports = common;