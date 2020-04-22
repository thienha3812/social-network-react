import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, state, ...rest }) {
  console.log(state.signinReducer.isLogged)
  return (
    <>
      {
        state.signinReducer.isLogged ? (
          <Route {...rest}>
            <Component />
          </Route>
        ) : <Redirect to="/dangnhap" />
    }
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps, null)(ProtectedRoute);
