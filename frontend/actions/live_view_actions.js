import * as TakePollApiUtil from "../util/take_poll_api_util";

// RECEIVE_RESULTS, RECEIVE_POLL_INFO

// const defaultLiveViewState = {
//   authorId: "",
//   groupId: "",
//   results: [{
//     answer_id: "",
//     tally: ""
//   }]
// };

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_POLL_INFO = "RECEIVE_POLL_INFO";

export const fetchPollInfo = (hash) => (dispatch) => (
  TakePollApiUtil.fetchUserIdGroupId(hash)
                 .then((data) => dispatch(ReceivePollInfo(data)))
);


export const ReceivePollInfo = ({groupId, authorId}) => ({
  type: RECEIVE_POLL_INFO,
  groupId,
  authorId
});

export const ReceiveResults= ({results}) => ({
  type: RECEIVE_RESULTS,
  results
});
