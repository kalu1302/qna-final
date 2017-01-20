import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';

import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import DashContainer from './dash/dash_container';
import CreatePollContainer from './static_create_poll/create_poll_container';
import LiveViewContainer from './live_view/live_view_container';
import Splash from './splash/splash';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//TODO remove way later
import Test from './test_test/test';

const Root = ({store}) => {

  const reqLoggedIn = (nextState, replaceState) => {
    if (store.getState().session.currentUser === null) {
      replaceState({ nextPathname: nextState.location.pathname }, '/create');
    }
  };

  const reqNotLoggedIn = (nextState, replaceState) => {
    if (store.getState().session.currentUser !== null) {
      replaceState({ nextPathname: nextState.location.pathname }, '/');
    }
  };

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={ hashHistory }>
          <Redirect from="/" to="welcome"/>
          <Route component={ App }>
            <Route path='welcome'
                   component={ Splash }/>
            <Route path='login'
                   component={ AuthFormContainer }
                   onEnter={reqNotLoggedIn}/>
            <Route path='signup'
                   component={ AuthFormContainer }
                   onEnter={reqNotLoggedIn}/>
            <Route path='create'
                   component={ DashContainer }
                   onEnter={reqLoggedIn}/>
            <Route path='live/:live_url'
                   component={ LiveViewContainer }
                   onEnter={reqLoggedIn}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
