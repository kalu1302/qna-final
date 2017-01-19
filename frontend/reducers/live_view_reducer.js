import { merge } from 'lodash';
import { RECEIVE_RESULTS, RECEIVE_POLL_INFO} from '../actions/live_view_actions';

  const defaultLiveViewState = {
    authorId: "",
    groupId: "",
    results: []
  };


  const LiveViewReducer = (oldState = defaultLiveViewState, action) => {
    Object.freeze(oldState);

    switch (action.type) {
      case RECEIVE_RESULTS:
        let newState = merge({}, oldState);
        newState.results = action.results;
        return newState;
        case RECEIVE_POLL_INFO:
          newState = merge({}, oldState);
          newState.groupId = action.groupId;
          newState.authorId = action.authorId;
          return newState;
      default:
        return oldState;
    }
  };

export default LiveViewReducer;
