import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import authenticationReducer from './authentication';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  authentication: authenticationReducer,
});

export default rootReducer;
