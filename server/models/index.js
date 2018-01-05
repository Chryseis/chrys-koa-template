/**
 * Created by Administrator on 2017/12/29.
 */
const fs = require('fs');

let files = fs.readdirSync(__dirname);

let models = files.filter((f) => {
    return f.indexOf('index') < 0;
})

models.forEach(f => {
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + `/${name}`);
})