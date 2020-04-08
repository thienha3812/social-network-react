/* eslint-disable no-case-declarations */

import { HANDLE_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './constants';


const initialState = {
  error: null,
  success: null,
  full_name: null,
  loading: null,
  isLogged: null,
};

const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
function signinReducer(state = initialState, { type, payload }) {
  switch (type) {
    case HANDLE_LOGIN:
      return { ...state, loading: true };
    case HANDLE_LOGOUT:
      return {
        ...state, isLogged: null, success: null,
      };
    case LOGIN_SUCCESS:
      const { full_name } = payload.data;
      return {
        ...state, loading: false, isLogged: true, success: true, full_name,
      };
    default:
      return state;
  }
}

export default signinReducer;
