/**
 * Created by Administrator on 2018/1/1.
 */
const env = process.env.NODE_ENV;
const opn = require('opn');
const app = env == 'production' ? require('../startup.prod') : require('../startup.dev');
const {devPort, prodProt} = require('../config').serverConfig

if (env == 'production') {
    app.listen(prodProt, () => {
        console.log(`app listening ${prodProt}...`);
    })
} else {
    app.listen(devPort, () => {
        console.log(`app listening ${devPort}...`);
        //opn('http://localhost:3000');
    })
}
