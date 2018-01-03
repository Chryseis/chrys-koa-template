/**
 * Created by Administrator on 2018/1/1.
 */
const moment = require('moment');

const dateToTimestamp = (date) => {
    return Number(moment(date).format('x'));
}

const timestampToDate = (timestamp) => {
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
}


module.exports = {
    dateToTimestamp,
    timestampToDate
}