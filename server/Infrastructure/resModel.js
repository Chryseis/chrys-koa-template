/**
 * Created by Administrator on 2017/12/30.
 */
const {resInfo} = require('../constants');

const {succ, err} = resInfo;

class ResBaseModel {
    constructor(code, message, result) {
        this._code = code;
        this._message = message;
        this._result = result;
    }

    //返回码
    get code() {
        return this._code;
    }

    set code(code) {
        this._code = code;
    }

    //返回信息
    get message() {
        return this._message;
    }

    set message(message) {
        this._message = message;
    }

    //返回结果
    get result() {
        return this._result;
    }

    set result(result) {
        this._result = result;
    }
}

class ResSuccModel extends ResBaseModel {
    constructor(result) {
        super(succ.code, succ.msg);
    }
}

class ResErrModel extends ResBaseModel {
    constructor(result) {
        super(err.code, err.msg);
    }
}

modules.exports = {
    ResSuccModel,
    ResErrModel
};