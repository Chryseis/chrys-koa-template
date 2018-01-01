/**
 * Created by Administrator on 2018/1/1.
 */
const opn = require('opn');
const devApp = require('../startup.dev');
const prodApp = require('../startup.prod');
const {devPort, prodProt} = require('../config').serverConfig

let env = process.env.NODE_ENV;
if (env == 'production') {
    prodApp.listen(prodProt, () => {
        console.log(`app listening ${prodProt}...`);
    })
} else {
    devApp.listen(devPort, () => {
        console.log(`app listening ${devPort}...`);
        //opn('http://localhost:3000');
    })
}
