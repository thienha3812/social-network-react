import { all } from 'redux-saga/effects';
import signinSaga from './pages/signin/sagas';

const indexSagas = function* () {
  yield all([
    signinSaga(),
  ]);
};

export default indexSagas;
