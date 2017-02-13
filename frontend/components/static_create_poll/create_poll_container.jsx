import { connect } from 'react-redux';
import {receiveGroupData,
        receiveAnswerData,
        receiveQuestionData,
        submitPoll} from '../../actions/create_poll_actions';
import CreatePoll from './create_poll';

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  group: state.pollForm
  });
};

const mapDispatchToProps = dispatch => ({
  receiveGroupData: () => dispatch(receiveGroupData()),
  receiveQuestionData: (indexedQuestion) => dispatch(receiveQuestionData(indexedQuestion)),
  receiveAnswerData: (indexedAnswer) => dispatch(receiveAnswerData(indexedAnswer)),
  submitPoll: (data) => dispatch(submitPoll(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
