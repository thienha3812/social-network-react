/* eslint-disable */
import { NavLink, Route, Switch, Router } from 'react-router-dom';
import React, { Suspense, useEffect,useState } from 'react';
import { hot } from 'react-hot-loader';
import LoginPage from './LoginPage';
import ProtectedRoute from './protected_route';
import DetailPlace from './DetailPlace'
import NewsFeedPage from './NewsFeedPage'
import ChatPage from './ChatPage'
import ProfilePage from './ProfilePage';
import ProfilePageByID from './ProfilePageByID'
import { useSelector, useDispatch } from 'react-redux';
import socket from '../utils/socket'
import { getUserOnlineAction } from '../actions/user_online';
import { Provider } from './AppContext'
const App = () => {
  const dispatch = useDispatch()
  const is_logged = useSelector(state => state.authentication.is_logged)
  const state = useSelector(state => state)
  const [_socket,setSocket] = useState(null)
  const refreshUserOnline = async () => {
    dispatch(getUserOnlineAction())
  }
  useEffect(() => {
    if (is_logged === true) {
      const username = state.authentication.user_infor.username
      const account_id = state.authentication.user_infor.account_id
      let _socket = socket({ username, account_id })
      setSocket(_socket)    
      _socket.on("USER_RECEIVE_MESSAGE",function(data){
        
    })  
      _socket.on("USER_ONLINE", function () {
        refreshUserOnline()
      })
    }
  }, [is_logged])
  return (
    <>
      <Suspense fallback={<div>Loading......</div>}>
        <Switch>
          <Provider value={{socket: _socket}}>
            <Route path="/dang-nhap" component={LoginPage} />
            <ProtectedRoute path="/du-lich" component={NewsFeedPage} />
            <ProtectedRoute path="/dia-diem/:id?" component={DetailPlace} />
            <ProtectedRoute path="/ho-so" component={ProfilePage} />
            <ProtectedRoute path="/nguoi-dung/:id?" component={ProfilePageByID} />
            <ProtectedRoute path="/nhan-tin" component={ChatPage} />
          </Provider>
        </Switch>
      </Suspense>
    </>
  )
};


export default hot(module)(App);
