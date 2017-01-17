import React from 'react';
import { connect } from 'react-redux';
import { logout, signup, login } from '../../actions/session_actions';
import Dash from './dash';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
