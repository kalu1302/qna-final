import { merge } from 'lodash';
import {} from '../actions/create_poll_actions';

  const defaultSessionState = {

  };

  const CreatePollReducer = (oldState = defaultSessionState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
    //   case RECEIVE_CURRENT_USER:
    //     return merge({}, defaultSessionState, {currentUser: action.currentUser});
    //   case RECEIVE_USER_ERRORS:
    //     return merge({}, defaultSessionState, {errors: action.errors});
      default:
        return oldState;
    }
  };

export default CreatePollReducer;
