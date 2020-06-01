/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { store, history } from './store/configureStore';
import Root from './pages/Root';
import './styles/bootstrap.min.css';
import './styles/responsive.css';
import './styles/style.scss';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

require('./favicon.ico');
// Tell webpack to load favicon.ico

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./pages/Root', () => {
    const NewRoot = require('./pages/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
