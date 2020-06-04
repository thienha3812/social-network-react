import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import authenticationReducer from './authentication';
import { getUserOnlineReducer } from './user_online';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  authentication: authenticationReducer,
  user_online : getUserOnlineReducer
});

export default rootReducer;
