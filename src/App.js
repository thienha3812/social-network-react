import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';


// Import Pages
import Signin from './pages/signin/index';
import Signup from './pages/signup/index';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
