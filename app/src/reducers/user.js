/**
 * Created by Administrator on 2017/12/31.
 */
import {user as Action} from '../constants/actionType';


const initialState = {
    name: '',
    sex: 0,
    birthday: '',
    createUser: '',
    createDate: '',
    userList: []
}

const reducersMap = {
    [Action.GET_USER]: (state, {name, sex, birthday}) => {
        return {
            name,
            sex,
            birthday
        }
    },
    [Action.GET_USER_LIST]: (state, action) => {
        return {
            userList: action.userList
        }
    },
    [Action.DELETE_USER]: (state, {id}) => {
        let userList = _.cloneDeep(state.userList);
        _.remove(userList, (user) => user.id === id);
        return {
            userList
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