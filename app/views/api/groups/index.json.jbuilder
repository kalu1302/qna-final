json.groups(@groups) do |group|
  json.name group.name
  json.id group.id
  json.subject group.subject
end
