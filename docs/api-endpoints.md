# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Questions

- `GET /api/questions`
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`

### Groups

- `GET /api/groups`
- `POST /api/groups`
- `GET /api/groups/:id`
- `DELETE /api/groups/:id`
- `GET /api/groups/:id/notes`

### Answers

- `GET /api/:question_id/answers`
- `POST /api/:question_id/answers`
- `GET /api/:question_id/answers/:id`
- `PATCH /api/:question_id/answers/:id`
- `DELETE /api/:question_id/answers/:id`
