import * as GroupApiUtil from '../util/group_api_util';

export const RECEIVE_POLLS_INDEX = "RECEIVE_POLLS_INDEX";

export const fetchAllGroups = () => (dispatch) => (
  GroupApiUtil.fetchAllGroups()
                .then(
                  groups => {
                    console.log(groups);
                    dispatch(receivePollsIndex(groups));
                  })
);

export const receivePollsIndex = (groups) => ({
  type: RECEIVE_POLLS_INDEX,
  groups
});
