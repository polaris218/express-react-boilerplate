import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 *
 * @param {component} Component - component have to go
 * @param {props} rest: passed from App, App'pass
 */
const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    path={rest.path}
    render={props => (localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
  }
  />
);

export default PrivateRouter;
