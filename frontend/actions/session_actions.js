import * as SessionApiUtil from "../util/session_api_util";
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const demoLogin = () => (dispatch) => (
  SessionApiUtil.login({user: {username: "testing2", password: "testing"}})
                .then(
                  currentUser => {
                    dispatch(receiveCurrentUser(currentUser));
                    hashHistory.push('/create');
                  },
                  errors => (dispatch(receiveUserErrors(errors.responseJSON)))
));

export const login = (user) => (dispatch) => (
  SessionApiUtil.login(user)
                .then(
                  currentUser => {
                    dispatch(receiveCurrentUser(currentUser));
                    hashHistory.push('/create');
                  },
                  errors => (dispatch(receiveUserErrors(errors.responseJSON)))
));

export const signup = (user) => (dispatch) => (
  SessionApiUtil.signup(user)
                .then(
                  currentUser => {
                    dispatch(login(user));
                  },
                  errors => (dispatch(receiveUserErrors(errors.responseJSON)))
));

export const logout = () => (dispatch) => (
  SessionApiUtil.logout()
                .then(
                  () => {
                  dispatch(receiveCurrentUser(null));
                  hashHistory.push('/signup');
                  },
                (errors) => dispatch(receiveUserErrors(errors.responseJSON))
));

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});
