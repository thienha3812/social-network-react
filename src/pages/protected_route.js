/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import CustomLayout from '../layout';


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <CustomLayout>
        <Component {...props} />
      </CustomLayout>
    )}
  />
);

export default ProtectedRoute;
