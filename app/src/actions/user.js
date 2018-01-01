/**
 * Created by Administrator on 2017/12/31.
 */
import {user as Action} from '../constants/actionType';
import fetch from '../common/js/fetch'
import statusCode from '../constants/statusCode'


export function getUser(name) {
    return async (dispatch) => {
        let res = await fetch('/api/user/getuser', {
            method: 'get',
            queryParams: {
                name
            }
        });

        let {code, message, result} = await res.json();

        if (code == statusCode.SUCC) {
            return dispatch({
                type: Action.GET_USER,
                name: result.name,
                sex: result.sex,
                birthday: result.birthday
            })
        }
    }
}


export function getUserList() {
    return async (dispatch) => {
        let res = await fetch('/api/user/getuserList', {
            method: 'get'
        });

        let {code, message, result} = await res.json();

        if (code == statusCode.SUCC) {
            return dispatch({
                type: Action.GET_USER_LIST,
                userList: result
            })
        }
    }
}

export function removeUser(id) {
    return async (dispatch) => {
        let res = await fetch('/api/user/removeuser', {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });

        let {code, message, result} = await res.json();

        if (code == statusCode.SUCC) {
            return dispatch({
                type: Action.DELETE_USER,
                id: result.id
            })
        }
    }
}