export const fetchQuestions = (groupId) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${groupId}`
  })
);

export const submitPollAnswers = (data) => (
  $.ajax({
    method: "POST",
    url: "api/responses",
    data: data
  })
);
