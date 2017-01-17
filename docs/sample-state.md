```js
{
  currentUser: {
    id: 1,
    email: "appacademy@appacademy.io"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createQuestion: {errors: ["body can't be blank"]}
  },
  Question: {
    1: {
      question: "Sample State?",
      author_id: 1,
      group_id: 1
      type: "choice",
      responses: {
        1: {
          id: 1,
          answer: "Coding"
        }
      }
      status: {
         lock: true,
         active: true
    }
    }
  },
  Group: {
    Questions: {
      question_id: { question: "Redux",
      author_id: 1
    }
    group_id: 2,
    surveydisplay: true
  }
}
```
