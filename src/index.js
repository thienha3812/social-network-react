/* eslint-disable no-use-before-define */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import App from './App';
import * as serviceWorker from './serviceWorker';
import indexReducer from './index.reducer';
import indexSagas from './index.sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  // ...options
});

const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, indexReducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
  ),
);
const persistor = persistStore(store);
sagaMiddleware.run(indexSagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
