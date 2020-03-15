
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { login } from '../api/account'
import { push } from 'connected-react-router'

const LOGIN_SUCESS = "LOGIN_SUCESS"

function* handleLogin(action) {

    try {
        const response = yield call(login, { username: action.payload.username, password: action.payload.password })
        if (response.data.data.token) {
            yield put({ type: LOGIN_SUCESS, payload: response.data })
            yield put(push("/newsfeed"))
        }
    } catch{
        yield put({ type: "LOGIN_FAILUE" })
    }

}

function* watchAll() {
    yield takeLatest("HANDLE_LOGIN", handleLogin)
}

function* rootSaga() {
    yield all([
        watchAll(),
    ])
}

export default rootSaga;