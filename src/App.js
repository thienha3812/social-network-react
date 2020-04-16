import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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

function App() {
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
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
