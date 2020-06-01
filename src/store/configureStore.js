/* eslint-disable */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createRootReducer from '../reducers';

export const history = createBrowserHistory();


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
const reactRouterMiddleware = routerMiddleware(history);
const middlewares = [
  thunk,
  reactRouterMiddleware,
];
export const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
