import { merge } from 'lodash';
import {} from '../actions/create_poll_actions';

  const defaultSessionState = {
    user_id:
    name:
    questions: {
    0: { body:
    question_type:
    answers: {
    0: { body:
    answer_type:
    }
    }
    }
  };

  const CreatePollReducer = (oldState = defaultCreatePollState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_GROUP_DATA:
            return action.group;
        case RECEIVE_QUESTION_DATA:
          return merge(oldState, {questions: action.question});
        case RECEIVE_ANSWER_DATA:
          return merge(oldState, {questions: action.answer});
    //   case RECEIVE_CURRENT_USER:
    //     return merge({}, defaultSessionState, {currentUser: action.currentUser});
    //   case RECEIVE_USER_ERRORS:
    //     return merge({}, defaultSessionState, {errors: action.errors});
      default:
        return oldState;
    }
  };

export default CreatePollReducer;
