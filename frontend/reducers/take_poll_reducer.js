import { merge } from 'lodash';
import { RECEIVE_QUESTIONS, ReceiveQuestions} from '../actions/take_poll_actions';

  const defaultTakePollState = {};

  const TakePollReducer = (oldState = defaultTakePollState, action) => {
    Object.freeze(oldState);

    const type = action.type;
    const questions = action.questions;

    switch (action.type) {
      case RECEIVE_QUESTIONS:
        return action.questions;
      default:
        return oldState;
    }
  };

export default TakePollReducer;
