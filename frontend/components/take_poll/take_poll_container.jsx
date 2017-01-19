import { connect } from 'react-redux';
import TakePollModal from './take_poll_modal';
import { fetchQuestions, submitPollAnswers } from '../../actions/take_poll_actions';

const mapStateToProps = (state, myProps) => {
  let props = {
  takePoll: state.takePoll,
  groupId: myProps.groupId,
  currentUser: state.session.currentUser
  };


  return props;};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (GroupId) =>
                  (dispatch(fetchQuestions(GroupId))),
  submitPollAnswers: (answersData) =>
                      (dispatch(submitPollAnswers(answersData)))
});

export default connect(mapStateToProps, mapDispatchToProps)(TakePollModal);
