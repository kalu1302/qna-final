import { connect } from 'react-redux';
import TakePollModal from './take_poll_modal';
import { fetchQuestions, submitPollAnswers } from '../../actions/take_poll_actions';

const mapStateToProps = (state, myProps) => {
  let props = {
  float: myProps.float,
  takePoll: state.takePoll,
  groupId: myProps.groupId,
  groupName: myProps.groupName,
  groupSubject: myProps.groupSubject,
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
