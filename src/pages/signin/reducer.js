/* eslint-disable no-case-declarations */

import { HANDLE_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,HANDLE_LOGOUT } from './constants';


const initialState = {
  success: null,
  full_name: null,
  loading: null,
  isLogged: false,
  avatar: null,
  username :  null
};


function signinReducer(state = initialState, { type, payload }) {
  switch (type) {
    case HANDLE_LOGIN:
      return { ...state, loading: true };
    case HANDLE_LOGOUT:
      return {
        ...state, isLogged: null, success: null,full_name : null ,avatar : null
      };
    case LOGIN_SUCCESS:
      const { full_name, avatar,username } = payload.data.user_infor;
      return {
        ...state, loading: false, isLogged: true, success: true, full_name, avatar,username
      };
    case LOGIN_FAILURE:
      return {
        ...state, loading: false, isLogged: false, success: false,
      };
    default:
      return state;
  }
}

export default signinReducer;
