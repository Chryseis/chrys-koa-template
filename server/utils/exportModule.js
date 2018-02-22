const fs = require('fs');

const exportModule = (exports, require, path, params) => {
    let files = fs.readdirSync(path);

    let models = files.filter((f) => {
        return f.indexOf('index') < 0;
    })

    models.forEach(f => {
        let name = f.substring(0, f.length - 3);
        if (params instanceof Array) {
            exports[name] = require(path + `/${name}`).apply(this, params);
        } else {
            exports[name] = require(path + `/${name}`);
        }
    })
}

module.exports = exportModule;