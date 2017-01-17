import { connect } from 'react-redux';
// import * as PollDbActions from '../../actions/create_poll_actions';
import CreatePoll from './create_poll';

import QuestionForm from './question_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  pollForm: state.pollForm
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
