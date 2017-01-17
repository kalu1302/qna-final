export const getQuestion = (id) => (
  $.ajax({
    method: "GET",
    url: `api/questions/${id}`
  })
);

export const receiveQuestion = (question) => (
  $.ajax({
    method: "POST",
    url: "api/questions",
    data: question
  })
);

export const deleteQuestion = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/questions/${id}`
  })
);
