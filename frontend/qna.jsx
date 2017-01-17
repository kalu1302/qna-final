import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

//TODO remove testing
import { login, signup, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
 //TODO TESTING
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.user1 = {user: {username:"testing", password:"testing"}};

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  //TODO TESTING
  window.store = store;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
