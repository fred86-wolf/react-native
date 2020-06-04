import {POST_LOGIN_START, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR, POST_LOGIN_WRONG} from '../../consts/actionType';

export default function(state, action) {
    switch (action.type) {
        case POST_LOGIN_START:
            return {...state};
            break;
        case POST_LOGIN_SUCCESS:
            return {...state, strUsuario:action.infoUser};
            break;
        case POST_LOGIN_ERROR:
            return { ...state, strUsuario: null, error: action.error };
            break;
        default:
            return{... state};
    }
}