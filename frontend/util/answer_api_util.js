export const getAnswer = (id) => (
  $.ajax({
    method: "GET",
    url: `api/answers/${id}`
  })
);

export const receiveAnswer = (question) => (
  $.ajax({
    method: "POST",
    url: "api/answers",
    data: question
  })
);

export const deleteAnswer = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/answers/${id}`
  })
);
