/**
 * Created by Administrator on 2017/12/31.
 */
import {user as Action} from '../constants/actionType';
import fetch from '../common/js/fetch'


export function getUser(name) {
    return async (dispatch) => {
        let res = await fetch('/api/user/getuser', {
            method: 'get',
            queryParams: {
                name
            }
        });

        let {code, message,result} = await res.json();

        if (code == 8200) {
            return dispatch({
                type: Action.GET_USER,
                name: result.name,
                sex: result.sex,
                birthday: result.birthday
            })
        }
    }
}