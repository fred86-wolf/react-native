import {takeLatest, call, put} from 'redux-saga/effects';

import {POST_LOGIN_START, POST_LOGIN_SUCCESS,POST_LOGIN_ERROR} from '../../consts/actionType';
import apiCall from '../api';

export function* postLogin({payload}){
    try {
        const url = 'spLogin';
        const method = 'POST';
        const data = payload;
        const response = yield call(apiCall,url, method, data);
        console.log(response.data);
        // if (response.data.length > 0) {
        //     yield put({ type: POST_LOGIN_SUCCESS, infoUser: response.data[0] });
        // } else {
        //     yield put({ type: POST_LOGIN_ERROR, error: 'No se Encontraron Coincidencias'});
        // }
    } catch (error) {
        yield put({ type: POST_LOGIN_ERROR, error });
    }
}

export default function* login(){
    yield takeLatest(POST_LOGIN_START, postLogin);
}