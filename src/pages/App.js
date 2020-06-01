/* eslint-disable */
import { NavLink, Route, Switch, Router } from 'react-router-dom';
import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';
import LoginPage from './LoginPage';
import ProtectedRoute from './protected_route';
import DetailPlace from './DetailPlace'
import NewsFeedPage from './NewsFeedPage'
import ProfilePage from './ProfilePage';
import ProfilePageByID from './ProfilePageByID'
const App = () => (
  <>
    <Suspense fallback={<div>Loading......</div>}>
      <Switch>
        <Route  path="/dang-nhap" component={LoginPage} />
        <ProtectedRoute path="/du-lich" component={NewsFeedPage} />        
        <ProtectedRoute path="/dia-diem/:id?" component={DetailPlace} />
        <ProtectedRoute path="/ho-so" component = {ProfilePage} />
        <ProtectedRoute path="/nguoi-dung/:id?" component = {ProfilePageByID} />
      </Switch>
    </Suspense>
  </>
);


export default hot(module)(App);
