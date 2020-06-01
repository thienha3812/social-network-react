/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor } from '../store/configureStore';
// eslint-disable-next-line react/prop-types
const Root = ({ store, history }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
export default Root;
