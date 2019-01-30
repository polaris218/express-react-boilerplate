import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar';
import Login from './component/Login';
import Signup from './component/Signup';
import './App.css';


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
  
    return (
      <Router>
        <div>
          <NavBar />
          <Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default (App);
