import { merge } from 'lodash';
import { RECEIVE_QUESTIONS, RESET_QUESTIONS, ReceiveQuestions} from '../actions/take_poll_actions';

  const defaultTakePollState = {
    subject: "0",
    name: "Loading",
    questions: [
      { answers: [
        {
          answer: "",
          id: ""
        }
      ],
        body: " ",
        id: ""
      }
    ]};

  const TakePollReducer = (oldState = defaultTakePollState, action) => {
    Object.freeze(oldState);

    const type = action.type;
    const questions = action.questions;

    switch (action.type) {
      case RECEIVE_QUESTIONS:
        return action.questions;
      case RESET_QUESTIONS:
        return defaultTakePollState;
      default:
        return oldState;
    }
  };

export default TakePollReducer;
