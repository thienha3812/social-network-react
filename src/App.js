import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import Sidebar from './layout/sidebar';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import Rightbar from './layout/rightbar';
// Import Pages
import Signin from './pages/signin/index';
import Signup from './pages/signup/index';
import NewsFeed from './pages/newsfeed/index';
import Profile from './pages/profile/index';
import Chat from './pages/chat/index';
// Protected route
import ProtectedRoute from './protected.route';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { getUserOnline } from './services/user.service';


function App(props) {
  useState(()=>{    
    async function fetchData(){
        const response = getUserOnline()
        console.log(response)
        return response
    }
    if(props.state.signinReducer.isLogged){
        const username = props.state.signinReducer.username
        const socket = io.connect('http://localhost:9002/socket.io',{query : {username}})
        socket.on('connect',function(){
          console.log('connected')    
          fetchData()      
        })
    }
  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dangnhap" exact>
            <Signin />
          </Route>
          <Route path="/dangky">
            <Signup />
          </Route>
          <Route path="/">
            <Navbar />
            <Sidebar />
            <Rightbar />
            <ProtectedRoute component={NewsFeed} path="/bangtin" />
            <ProtectedRoute component={Chat} path="/nhantin" />
            <ProtectedRoute component={Profile} path="/nguoidung" />
            {/* <Redirect  from="" to="/bangtin"/> */}
            <Footer />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  state
})
export default connect(mapStateToProps,null)(App)
