import { connect } from 'react-redux';
import LiveViewPage from './live_view_page';
import {} from "../actions/live_view_actions";

const mapStateToProps = (state) => {
  let props = {
  currentUser: state.session.currentUser,
  groupId: state.liveView.groupId
  };


  return props;};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveViewPage);
