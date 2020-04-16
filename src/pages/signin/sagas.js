import {
  takeLatest, takeEvery, call, put,
} from 'redux-saga/effects';
import { HANDLE_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';
import { signinService } from '../../services/account.service';

function* signinFlow({ payload, type }) {
  try {
    const { username, password } = payload;
    const response = yield call(signinService, username, password);
    yield put({ type: LOGIN_SUCCESS, payload: { data: response.data } });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE });
  }
}

function* signinWatcher() {
  yield takeLatest(HANDLE_LOGIN, signinFlow);
}


export default signinWatcher;