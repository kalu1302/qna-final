# count number of user_id, group by answer_id, named as json.answer_id => count

json.results do
  json.array!(@questions) do |question|
    json.set! question.body do
      json.array!(question.answers) do |answer|
        json.text answer.body
        json.value answer.responses.count
      end
    end
  end
end
