# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({username: "testing2", password: "testing", live_group: 1})
gr1 = Group.create({user_id: user1.id, name: "Group1"})
q1 = Question.create({body: "Cats or Dogs?", group_id: gr1.id, question_type: "mc"})
a1 = Answer.create({question_id: q1.id, body: "Cats", answer_type: "closed"})
a2 = Answer.create({question_id: q1.id, body: "Dogs", answer_type: "closed"})
q2 = Question.create({body: "Favorite Breakfast?", group_id: gr1.id, question_type: "mc"})
a2_1 = Answer.create({question_id: q2.id, body: "Grand Slam", answer_type: "closed"})
a2_2 = Answer.create({question_id: q2.id, body: "Cereal", answer_type: "closed"})
a2_3 = Answer.create({question_id: q2.id, body: "Dinner", answer_type: "closed"})
a2_4 = Answer.create({question_id: q2.id, body: "Cold Pizza", answer_type: "closed"})
a2_5 = Answer.create({question_id: q2.id, body: "Trailmix", answer_type: "closed"})
a2_6 = Answer.create({question_id: q2.id, body: "Breakfast item 6", answer_type: "closed"})
a2_7 = Answer.create({question_id: q2.id, body: "Fruits", answer_type: "closed"})

gr2 = Group.create({user_id: user1.id, name: "Group2"})
q2_2 = Question.create({body: "Favorite Breakfast?", group_id: gr2.id, question_type: "mc"})
a2_1 = Answer.create({question_id: q2_2.id, body: "Grand Slam", answer_type: "closed"})
a2_2 = Answer.create({question_id: q2_2.id, body: "Cereal", answer_type: "closed"})
a2_3 = Answer.create({question_id: q2_2.id, body: "Dinner", answer_type: "closed"})
a2_4 = Answer.create({question_id: q2_2.id, body: "Cold Pizza", answer_type: "closed"})
a2_5 = Answer.create({question_id: q2_2.id, body: "Trailmix", answer_type: "closed"})
a2_6 = Answer.create({question_id: q2_2.id, body: "Breakfast item 6", answer_type: "closed"})
a2_7 = Answer.create({question_id: q2_2.id, body: "Fruits", answer_type: "closed"})
q2_1 = Question.create({body: "Birds or Snakes?", group_id: gr2.id, question_type: "mc"})
a2_1 = Answer.create({question_id: q2_1.id, body: "Birds", answer_type: "closed"})
a2_2 = Answer.create({question_id: q2_1.id, body: "Snakes", answer_type: "closed"})
