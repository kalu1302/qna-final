export const submitPoll = ({group}) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: {group}
  })
);
