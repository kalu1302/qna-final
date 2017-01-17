/*

CreatePoll internal state:

{
  question_order: [question_ids]
  questions: {1: {
                  type:
                  answer_order: [answer_ids]
                  answers: {1: {


                }}

}}

CreatePoll store state interactions:
none

CreatePoll db interactions:
create Group with question_order
create Question with group_id and answer_order
create Answer with question_id
reject all, chain answer, question, group



Database format expectations:

## questions
column name | data type | details
------------|-----------|-----------------------
group_id    | integer   | not null, foreign key
question    | string    | not null
type        | string    | not null

## answers
column name | data type | details
------------|-----------|-----------------------
question_id | integer   | not null, foreign key
answer      | string    | not null


*/
