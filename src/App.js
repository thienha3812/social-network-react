import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch,Route , Redirect ,BrowserRouter as  Router,useLocation} from 'react-router-dom';
import {  Row, Col} from 'react-bootstrap';
//
import Login from './pages/login/login';
import NewsFeed from './pages/newfeed/newfeed';
import Profile from './pages/profile/profile'
//
import NavBar from './components/navbar';
import Drawer from './components/drawer';
//
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,useState} from 'react'


function App(props) {  
  let [contentScreen,setContentScreen] = useState("")  
  let location = useLocation()
  useEffect(()=>{
    if(location.pathname === '/newsfeed'){
      setContentScreen("8")
    }
    if(location.pathname === '/profile'){
      setContentScreen("9")
    }
  },[contentScreen, location.pathname])
  return (
    <div className="App">
      {
        window.location.pathname !== "/login" &&  <NavBar />
      }
      <Row style={{ backgroundColor: "#f3f3f3",height:"100vh"}}>
       <Col xs="3" md="1">
       { window.location.pathname !== "/login" && <Drawer/>}
       </Col>
        <Col xs={contentScreen} md={window.location.pathname === "/login" ? 12 : 11}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/newsfeed">
                <NewsFeed />
              </Route>
              <Router path="/profile">
                <Profile/>
              </Router>
              <Redirect path="/" to="/newsfeed"/>
            </Switch>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = state => ({userLogin : state})
export default connect(mapStateToProps,null)(App)
