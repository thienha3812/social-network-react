import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './layout/sidebar';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
// Import Pages
import Signin from './pages/signin/index';
import Signup from './pages/signup/index';
import NewsFeed from './pages/newsfeed/index';
import Chat from './pages/chat/index';
// Protected route
import ProtectedRoute from './protected.route';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dangnhap">
            <Signin />
          </Route>
          <Route path="/dangky">
            <Signup />
          </Route>
          <Route path="/">
            <Sidebar />
            <ProtectedRoute component={NewsFeed} path="/bangtin" />
            <ProtectedRoute component={Chat} path="/nhantin" />
            <Navbar />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
