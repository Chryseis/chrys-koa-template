/**
 * Created by Administrator on 2017/12/31.
 */
import {user as Action} from '../constants/actionType';


const initialState = {
    name: '',
    sex: 0,
    birthday: '',
    createUser: '',
    createDate: ''
}

const reducersMap = {
    [Action.GET_USER]: (state, {name, sex, birthday}) => {
        return {
            name,
            sex,
            birthday
        }
    }
}

export default function user(state = initialState, action) {
    const reduceFn = reducersMap[action.type];
    if (!reduceFn) {
        return state;
    }
    return Object.assign({}, state, reduceFn(state, action))
}