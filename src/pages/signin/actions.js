import { HANDLE_LOGIN, HANDLE_LOGOUT } from './constants';
export const handleLogin = ({ username, password }) => ({ type: HANDLE_LOGIN, payload: { username, password } });
export const handleLogout = ()=> ({type : HANDLE_LOGOUT})
