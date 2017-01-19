import { connect } from 'react-redux';
import { logout, signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => (dispatch(signup(user))),
  login: (user) => (dispatch(login(user))),
  logout: () => (dispatch(logout()))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
