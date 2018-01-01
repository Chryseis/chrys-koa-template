/**
 * Created by Administrator on 2018/1/1.
 */
const opn = require('opn');
const app = require('../startup.dev');

app.listen(3000, () => {
    console.log('app listening 3000...');
    //opn('http://localhost:3000');
})