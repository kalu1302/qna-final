import React from 'react';
import { Router, Link, withRouter, RouterContext } from 'react-router';

import {range} from 'lodash';

import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500} from 'material-ui/styles/colors';

import QuestionForm from './question_form';
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

  constructor(props) {
    super(props);

    this.state = {value: "Untitled Quiz"};

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.frontendValid = this.frontendValid.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.receiveAnswerData = props.receiveAnswerData.bind(this);
    this.receiveQuestionData = props.receiveQuestionData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  frontendValid() {
    //non priority
    //omit empty questions w empty answers
    //omit empty answers from titled questions
    //error for empty questions w stated answers
    //return boolean
  }

  handleSubmit(e) {
    //checks form and returns true false for if valid
    // if (this.frontendValid) {
      //util call
      //store change for next page (renders active poll)
    e.preventDefault();
    let data = this.props.group;
    data.name = this.state.value;
    data.user_id = this.props.currentUser.id;
    this.props.submitPoll({group: data});
    // }

  }

  handleAddQuestion (e) {
    e.preventDefault();

    const question_indices = Object.keys(this.props.group.questions);
    let new_index = 1 + parseInt(question_indices.sort( (a,b) => (b - a) )[0]);
    if ( typeof new_index === "undefined") {
      new_index = 0;
    }

    const defaultQuestion = {[new_index]: {
        body: "",
        question_type: "mc",
        answers: {
          0: { body: "",
          answer_type: "closed"
          },
          1: { body: "",
          answer_type: "closed"
          }
          }
        }
      };

    this.receiveQuestionData(defaultQuestion);
  }

  handleStateChange(e) {
    this.setState({value: e.target.value});
  }

  render () {

    const questions = this.props.group.questions;
    const renderQuestions = Object.keys(questions).map(
      (q_ind) => {
        let question = questions[q_ind];

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

    return (

        <form onSubmit={this.handleSubmit}>
          <br/>
          <TextField
            floatingLabelText="Quiz Name"
            onChange={this.handleStateChange}
            floatingLabelFixed={true}
            value={this.state.value}
            />

          <br/>
          <br/>

          {renderQuestions}

          <br/>
          <br/>

          <RaisedButton
            onClick={this.handleAddQuestion}
            fullWidth={true}
            label="Add a New Question"/>

          <br/>
          <br/>

          <RaisedButton
            primary={true}
            label="Submit New Quiz"
            onClick={this.handleSubmit}
            />
        </form>
    );
  }
}

export default CreatePoll;
