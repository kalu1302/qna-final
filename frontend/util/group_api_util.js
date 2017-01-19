export const fetchGroup = (id) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${id}`
  })
);

export const receiveGroup = (question) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: question
  })
);

export const deleteGroup = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/groups/${id}`
  })
);

export const fetchAllGroups = (id) => (
  $.ajax({
    method: "GET",
    url: "api/groups"
  })
);
