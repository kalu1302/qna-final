// import * as SessionApiUtil from "../util/session_api_util";
import { hashHistory } from 'react-router';
import * as CreatePollApiUtil from "../util/create_poll_api_util";
import { fetchPollInfo } from "./live_view_actions";

// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
//
// export const receiveCurrentUser = (currentUser) => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });
//
// export const receiveUserErrors = (errors) => ({
//   type: RECEIVE_USER_ERRORS,
//   errors
// });

export const RECEIVE_GROUP_DATA = "RECEIVE_GROUP_DATA";
export const RECEIVE_ANSWER_DATA = "RECEIVE_ANSWER_DATA";
export const RECEIVE_QUESTION_DATA = "RECEIVE_QUESTION_DATA";

export const submitPoll = (group) => (dispatch) => (
  CreatePollApiUtil.submitPoll(group).then(
                  (hash) => {
                    dispatch(fetchPollInfo(hash));
                    hashHistory.push(`/${hash}`);
                  })
);



export const receiveGroupData = (group) => ({
  type: RECEIVE_GROUP_DATA,
  group: group
});

export const receiveAnswerData = (indexedAnswer) => ({
  type: RECEIVE_ANSWER_DATA,
  answer: indexedAnswer
});

export const receiveQuestionData = (indexedQuestion) => ({
  type: RECEIVE_QUESTION_DATA,
  question: indexedQuestion
});

/*

CreatePoll internal state:

{
  question_order: [question_ids]
  questions: {1: {
                  type:
                  answer_order: [answer_ids]
                  answers: {1: {


                }}

}}

CreatePoll store state interactions:
none

CreatePoll db interactions:
create Group with question_order
create Question with group_id and answer_order
create Answer with question_id
reject all, chain answer, question, group



Database format expectations:

## questions
column name | data type | details
------------|-----------|-----------------------
group_id    | integer   | not null, foreign key
question    | string    | not null
type        | string    | not null

## answers
column name | data type | details
------------|-----------|-----------------------
question_id | integer   | not null, foreign key
answer      | string    | not null


*/
