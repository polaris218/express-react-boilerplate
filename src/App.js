import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Bottom from './component/Bottom';

import './App.css';
import Image from './assets/img/bg-sign.jpg';

const styles = theme => ({
  wholeStyle: {
    backgroundImage: `url(${Image})`,
  }
})
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.wholeStyle}>
          <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
            </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
