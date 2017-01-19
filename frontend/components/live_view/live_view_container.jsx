import { connect } from 'react-redux';
import LiveViewPage from './live_view_page';
import { fetchPollInfo, fetchResults } from "../../actions/live_view_actions";
import { fetchQuestions } from '../../actions/take_poll_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  authorId: state.liveView.authorId,
  groupId: state.liveView.groupId,
  results: state.liveView.results,
  liveUrl: ownProps.live_url,
  name: state.takePoll.name
});

const mapDispatchToProps = (dispatch) => ({
  fetchPollInfo: (hash) => (dispatch(fetchPollInfo(hash))),
  fetchResults: (groupId) => (dispatch(fetchResults(groupId))),
  fetchQuestions: (GroupId) => (dispatch(fetchQuestions(GroupId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveViewPage);
