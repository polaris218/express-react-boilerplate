import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import 'font-awesome/css/font-awesome.min.css';

const customHistory = createBrowserHistory();

// const preloadedState = window.__PRELOADED_STATE__;
// delete window.__PRELOADED_STATE__;

// const context = {};
const initialState = {
    loginFailed: 0,
    signupFailed: false,
    updateFailed: false,
    userData: [],
    offerData: [],
    token: '',
    userAdmin: '',
};

const store = configureStore(initialState);
ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
