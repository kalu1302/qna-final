import React from 'react';
import { Router, Link, withRouter, RouterContext } from 'react-router';

import {range} from 'lodash';

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
      add: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.frontendValid = this.frontendValid.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.receiveAnswerData = this.receiveAnswerData.bind(this);
    this.receiveQuestionData = this.receiveQuestionData.bind(this);
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

  handleAddQuestion (e) {
    e.preventDefault();
    let add = this.state.add + 1;
    this.setState({add});
  }

  handleAddAnswer () {
    //increment index
    //"create" <QuestionFormContainer index={index}/> by modifying the store
  }

  handleStateChange() {

  }

  render () {

    const defaultQuestion = {
            body: "",
            question_type: "mc",
            answers: {
              0: { body: "",
                   answer_type: "closed"}
            }
          };

    let question_index = [];

    const questions = this.props.group.questions;
    const renderQuestions = Object.keys(questions).map(
      (q_ind) => {
        let question = questions[q_ind];
        question_index.push(q_ind);

        return (
        <QuestionForm
          key={q_ind}
          index={q_ind}
          question={question}
          receiveAnswerData={this.receiveAnswerData}
          receiveQuestionData={this.receiveQuestionData}/>
        );
      }
    );

    question_index = question_index.sort((a, b) => a - b);

    //TODO FIX THIS when remove question implemented
    const start_index = question_index.length + 0;
    let renderAddQuestions = (
      range(this.state.add).map((ind) => (
        <QuestionForm
          key={start_index + ind}
          index={start_index + ind}
          question={defaultQuestion}
          receiveAnswerData={this.receiveAnswerData}
          receiveQuestionData={this.receiveQuestionData}/>
      ))
    );

    return (

        <form onSubmit={this.handleSubmit}>
          {renderQuestions}
          {renderAddQuestions}
        </form>
    );
  }
}

export default CreatePoll;
