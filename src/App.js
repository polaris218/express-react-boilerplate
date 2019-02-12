import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import CreateOffer from './component/CreateOffer';
import ViewOffer from './component/ViewOffer';
import Bottom from './component/Bottom';
import Story from './component/Story';
import UserAgreement from './component/UserAgreement';
import PrivacyPolicy from './component/PrivacyPolicy';
import Press from './component/Press';

import PrivateRoute from './component/PrivateRoute';

const muiStyles = () => ({
  wholeStyle: {
    // backgroundImage: `url(${'../img/bg-sign.jpg'})`,
    // backgroundImage: URL.createObjectURL('../img/bg-sign.jpg')
  }
})
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Route>
        <div className={classes.wholeStyle}>
          <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/story" exact component={Story} />
              <Route path="/useragreement" exact component={UserAgreement} />
              <Route path="/privacypolicy" exact component={PrivacyPolicy} />
              <Route path="/press" exact component={Press} />
              <PrivateRoute path="/createoffer" exact component={CreateOffer} />
              <PrivateRoute path="/viewoffer/:offerid" exact component={ViewOffer} />
            </Switch>
          <Bottom />
        </div>
      </Route>
    );
  }
}

export default withStyles(muiStyles)(App);
