# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
user_name       | string    | not null
password_digest | string    | not null
session_token   | string    | not null


## groups
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | foreign key
title       | string    | not null

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

## responses
column name | data type | details
------------|-----------|-----------------------
question_id | integer   | not null, foreign key
author_id   | integer   | not null, foreign key
answer_id   | integer   | not null, foreign key
responses   | string    | not null, foreign key
