import { combineReducers } from 'redux'
import loginReducer  from './login'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history)  => combineReducers({
    loginReducer,
    router : connectRouter(history)
})

export default rootReducer