import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER,
         RECEIVE_USER_ERRORS,
         receiveUserErrors,
         receiveCurrentUser} from '../actions/session_actions';

  const defaultSessionState = {currentUser: null, errors: []};

  const SessionReducer = (oldState = defaultSessionState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return merge({}, defaultSessionState, {currentUser: action.currentUser});
      case RECEIVE_USER_ERRORS:
        return merge({}, defaultSessionState, {errors: action.errors});
      default:
        return oldState;
    }
  };

export default SessionReducer;
