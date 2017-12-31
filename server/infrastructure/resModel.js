/**
 * Created by Administrator on 2017/12/30.
 */
const {resEnum} = require('../constants');

const {succ, err} = resEnum;

class ResBaseModel {
    constructor(code, message, result) {
        this.code = code;
        this.message = message;
        this.result = result;
    }

    //返回码
    get Code() {
        return this.code;
    }

    set Code(code) {
        this.code = code;
    }

    //返回信息
    get Message() {
        return this.message;
    }

    set Message(message) {
        this.message = message;
    }

    //返回结果
    get Result() {
        return this.result;
    }

    set Result(result) {
        this.result = result;
    }
}

class ResSuccModel extends ResBaseModel {
    constructor(result) {
        super(succ.code, succ.msg, result);
    }
}

class ResErrModel extends ResBaseModel {
    constructor(result) {
        super(err.code, err.msg, result);
    }
}

module.exports = {
    ResSuccModel,
    ResErrModel
};