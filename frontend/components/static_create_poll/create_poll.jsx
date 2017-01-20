import React from 'react';
import { Router, Link, withRouter, RouterContext } from 'react-router';

import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';


/*
QuestionFormIndex
  QuestionForm
    AnswerFromIndex
      AnswerForm
      AnswerNew
  QuestionsNew
PollSubmitButton
*/

// state slice =
// {
//      currentUser: {username: "", id: ""}
//   pollForm: {question_order: [],
//   questions: {
//        1: { question: "text?",
//             type: "multiple-choice",
//             open: {true},
//             answer_order: [],
//             default_answers: {
//               1: {answer: "option a, coord x y, true"}
//
//             }}
//         }
//   }
//   };

/* DATA FORMAT FOR API

group:
{ user_id:
name:
questions: [
{ body:
question_type:
answers: [
{ body:
answer_type:
}
]
}
]

*/

/* DATA FORMAT FOR STORE

group:
{ user_id:
name:
questions: {
0: { body:
question_type:
answers: {
0: { body:
answer_type:
}
}
}
}

to format for API will call lodash._values(questions and answers)

*/

class CreatePoll extends React.Component {

  constructor() {
    super();

    this.state = {
      user_id: this.props.currentUser.id,
      name: "",
      question_index: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.frontendValid = this.frontendValid.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  frontendValid() {
    //non priority
    //omit empty questions w empty answers
    //omit empty answers from titled questions
    //error for empty questions w stated answers
    //return boolean
  }

  handleSubmit() {
    //checks form and returns true false for if valid
    if (this.frontendValid) {
      //util call
      //store change for next page (renders active poll)
    }

  }

  handleAddQuestion () {
    //increment index
    //"create" <QuestionFormContainer index={index}/> by modifying the store
  }

  handleStateChange() {

  }

  render () {

    const questions = this.props.groups.questions;
    const renderQuestions = Object.keys(questions).map(
      (q_ind) => {
        let question = questions[q_ind];

        return (
        <QuestionForm
          key={q_ind}
          index={q_ind}
          question={question}/>
        );
      }
    );


    return (

        <form onSubmit={this.handleSubmit}>
        </form>
    );
  }
}

export default CreatePoll;
