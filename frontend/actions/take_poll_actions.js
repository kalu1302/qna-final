import * as TakePollApiUtil from '../util/take_poll_api_util';
import { fetchResults } from './live_view_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RESET_QUESTIONS = "RESET_QUESTIONS";

export const fetchQuestions = (groupId) => (dispatch) => (
  TakePollApiUtil.fetchQuestions(groupId)
                .then(
                  questions => {
                    dispatch(receiveQuestions(questions));
                  })
);

//then
export const submitPollAnswers = (answersData) => (dispatch) => (
  TakePollApiUtil.submitPollAnswers(answersData)
                .then(
                  ({groupId}) => {
                    dispatch(fetchResults(groupId));
                })
);

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const resetQuestions = () => ({
  type: RESET_QUESTIONS
});
