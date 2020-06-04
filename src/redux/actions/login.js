import {POST_LOGIN_START} from '../../consts/actionType';
  
  export const postLogin = payload => ({
    type: POST_LOGIN_START,
    payload
  });
  