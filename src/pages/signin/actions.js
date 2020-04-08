import { HANDLE_LOGIN } from './constants';

export const handleLogin = ({ username, password }) => ({ type: HANDLE_LOGIN, payload: { username, password } });

export default handleLogin;
