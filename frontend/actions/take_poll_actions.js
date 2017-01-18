import * as TakePollApiUtil from '../util/take_poll_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const fetchQuestions = (groupId) => (dispatch) => (
  TakePollApiUtil.fetchQuestions(groupId)
                .then(
                  questions => {
                    dispatch(receiveQuestions(questions));
                  })
);

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});
