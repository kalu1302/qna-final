export const fetchPollInfo = (hash) => (
  $.ajax({
    method: "GET",
    url:`api/live_views/${hash}`
  })
);

export const fetchResults = (groupId) => (
  $.ajax({
    method: "GET",
    url:`api/responses/${groupId}`
  })
);
