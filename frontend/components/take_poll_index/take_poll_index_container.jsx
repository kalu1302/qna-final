import { connect } from 'react-redux';
import TakePollIndex from './take_poll_index';
import { fetchAllGroups } from '../../actions/take_poll_index_actions';

const mapStateToProps = (state, myProps) => {
  let props = {
  groups: state.pollIndex.groups,
  myProps};

  return props;};

const mapDispatchToProps = (dispatch) => ({
  fetchAllGroups: () =>
                  (dispatch(fetchAllGroups()))
});

export default connect(mapStateToProps, mapDispatchToProps)(TakePollIndex);
