import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer  from '../reducers/index'
import rootSaga from '../sagas/index'
import {createBrowserHistory} from 'history'
import { routerMiddleware} from 'connected-react-router'
const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
const store = createStore(
    rootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
)
sagaMiddleware.run(rootSaga)
export default store
