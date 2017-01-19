import * as LiveViewApiUtil from "../util/live_view_api_util";
import {fetchQuestions} from "./take_poll_actions";

// RECEIVE_RESULTS, RECEIVE_POLL_INFO

// const defaultLiveViewState = {
//   authorId: "",
//   groupId: "",
//   results: [{
//     text: "", value: 0
//   }]
// };

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_POLL_INFO = "RECEIVE_POLL_INFO";

export const fetchPollInfo = (hash) => (dispatch) => (
  LiveViewApiUtil.fetchPollInfo(hash)
                 .then(
                   data => {
                      dispatch(ReceivePollInfo(data));
                      if (data.groupId !== "") {
                        dispatch(fetchResults(data.groupId));
                        dispatch(fetchQuestions(data.groupId));
                      }
                    }
                  )
);

export const fetchResults = (groupId) => (dispatch) => (
  LiveViewApiUtil.fetchResults(groupId)
                 .then((data) => (dispatch(ReceiveResults(data))))
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
