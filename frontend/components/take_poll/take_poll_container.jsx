import { connect } from 'react-redux';
import TakePollModal from './take_poll_modal';
import { fetchQuestions } from '../../actions/take_poll_actions';

const mapStateToProps = (state, myProps) => {
  let props = {
  takePoll: state.takePoll,
  groupId: myProps.groupId};

  return props;};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (GroupId) =>
                  (dispatch(fetchQuestions(GroupId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(TakePollModal);
