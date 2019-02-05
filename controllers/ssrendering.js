import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

import configureStore from '../src/configureStore';
import renderFullPage from '../template/templates';

const serverSideRendering = (req, res) => {
  const context = {};
  const initialState = {
    loginFailed: 0,
    signupFailed: false,
    updateFailed: false,
    userData: [],
    privateData: [],
    token: '',
    userAdmin: '',
  };

  const store = configureStore(initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
};

export default serverSideRendering;