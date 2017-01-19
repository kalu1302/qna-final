import { merge } from 'lodash';
import { RECEIVE_POLLS_INDEX, receivePollsIndex } from '../actions/take_poll_index_actions';

  const defaultPollIndexState = {groups: [{
    name: "",
    id: ""
  }]};

  const TakePollIndexReducer = (oldState = defaultPollIndexState, action) => {
    Object.freeze(oldState);

    switch (action.type) {
      case RECEIVE_POLLS_INDEX:
        return action.groups;
      default:
        return oldState;
    }
  };

export default TakePollIndexReducer;
