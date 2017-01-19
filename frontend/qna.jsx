import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

//TODO remove testing
import { login, signup, logout } from './actions/session_actions';
import {fetchQuestions, receiveQuestions} from './actions/take_poll_actions';
import * as TakePollApiUtil from './util/take_poll_api_util';
import { fetchPollInfo, fetchResults} from './actions/live_view_actions';
import * as LiveViewApiUtil from './util/live_view_api_util';

document.addEventListener('DOMContentLoaded', () => {
 //TODO TESTING
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.user1 = {user: {username:"testing", password:"testing"}};
  window.fetchResults = fetchResults;
  window.TakePollApiUtil = TakePollApiUtil;
  window.receiveQuestions = receiveQuestions;
  window.fetchPollInfo= fetchPollInfo;
  window.LiveViewApiUtil = LiveViewApiUtil;

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
