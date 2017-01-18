json.name @group.name

@questions = @group.questions
json.questions(@questions) do |question|
  json.body question.body
  json.id question.id

  @answers = question.answers

  json.answers(@answers) do |answer|
    json.answer answer.body
    json.id answer.id
  end
end
