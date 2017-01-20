import { connect } from 'react-redux';
import {receiveGroupData,
        receiveAnswerData,
        receiveQuestionData} from '../../actions/create_poll_actions';
import CreatePoll from './create_poll';

import QuestionForm from './question_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  pollForm: state.pollForm
});

const mapDispatchToProps = dispatch => ({
  receiveGroupData: () => dispatch(receiveGroupData()),
  receiveQuestionData: (indexedQuestion) => dispatch(receiveQuestionData(indexedQuestion)),
  receiveAnswerData: (qIndex, indexedAnswer) => dispatch(receiveAnswerData(qIndex, indexedAnswer))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
