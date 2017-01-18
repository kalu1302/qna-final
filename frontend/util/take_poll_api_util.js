export const fetchQuestions = (groupId) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${groupId}`
  })
);
