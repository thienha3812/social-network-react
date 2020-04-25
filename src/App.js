import React, { useState, useContext } from 'react';
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

import LoadingView from './components/loading';
function App(props) {
  const [list_user, setListUser] = useState([])
  const [loading, setLoading] = useState(false)
  const rootForAllPromise = async () => {
    await fetchListUser()
  }
  const fetchListUser = async () => {
    const resp = await getUserOnline()
    setListUser([...resp.data.list_user])
  }
  const listenWhileLoginSucess = () => {    
        if (props.state.signinReducer.isLogged) {
          const { id, username } = props.state.signinReducer
          const socket = io.connect('http://localhost:9002', { query: { id, username },path:'/socket.io' })
          socket.on('connect', function () {
            console.log('connected')
          });
          socket.on('USER_LOGOUT',async function(message){
              const resp = await getUserOnline()
              setListUser([...resp.data.list_user])
          })
          socket.on('USER_ONLINE',async function(message){
            const resp = await getUserOnline()
            setListUser([...resp.data.list_user])
          })
    }        
  }
  useState(() => {
    rootForAllPromise().then(()=>{
      setLoading(true)
    }).catch(err=>{
      setLoading(true)
    })
  })
  useState(()=>{
    listenWhileLoginSucess()
  })
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
            {loading ? 
            <>
            <Navbar />
            <Sidebar />
            <Rightbar list_user={list_user} />
            <ProtectedRoute component={NewsFeed} path="/bangtin" />
            <ProtectedRoute component={Chat} path="/nhantin" />
            <ProtectedRoute component={Profile} path="/nguoidung" />
            {/* <Redirect  from="" to="/bangtin"/> */}
            <Footer />
            </>  
            : <LoadingView open={true}/>
          }
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  state
})
export default connect(mapStateToProps, null)(App)
