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

        let json = await res.json();

        if (json.code == 8200) {
            return {
                type: Action.GET_USER,
                name: json.name,
                sex: json.sex,
                birthday: json.birthday
            }
        }
    }
}