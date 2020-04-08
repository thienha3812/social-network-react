import { combineReducers } from 'redux';
import signinReducer from './pages/signin/reducer';


const indexReducer = combineReducers({
  signinReducer,
});


export default indexReducer;
