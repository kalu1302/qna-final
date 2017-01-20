import React from 'react';
import { Router, Link, withRouter, RouterContext } from 'react-router';
import QuestionForm from './question_form';

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

class CreatePoll extends React.Component {

  constructor() {
    super();


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

    this.state = {
      question_index: 0,
      question_order: [0],
      questions: {
      0: {question: "Enter question here?",
          type: "mc",
          answer_index: 0,
          answer_order: [0],
          answers: {
                   0: ""}}
    }};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.frontendValid = this.frontendValid.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  frontendValid() {
    //omit empty questions w empty answers
    //omit empty answers from titled questions
    //error for empty questions w stated answers
    //return boolean
    let change = {};
    this.state.question_order.forEach((id) => {

    });
  }

  handleSubmit() {
    //checks form and returns true false for if valid
    if (this.frontendValid) {
      //util call
      //store change for next page (renders active poll)
    }

  }

  handleAddQuestion () {
    let new_id = this.state.question_index + 1;

    let new_question =
      {[new_id]: { question: "",
                   type: "",
                   answer_index: 0,
                   answer_order: [0],
                   answers: {
                            0: {answer:""}}}};

    this.setState({ question_index: new_id,
                    question_order: this.state.question_order.concat(new_id),
                    questions: this.state.questions.concat(new_question)});
  }

  handleAddAnswer(questionId) {
    let new_id = this.state[questionId].answer_index + 1;

    let new_answer =
      {[new_id]: { answer: ""};

    this.setState({ question_index: new_id,
                    question_order: this.state.question_order.concat(new_id),
                    questions: this.state.questions.concat(new_answer)});
  }

  handleStateChange(questionId) {
    return (field) => (e) => {
      let change = this.state[questionId];
      change[field] = e.target.value;
      this.setState({[questionId]: change});
    };
  }

  render () {
    let old = (
        <form onSubmit={this.handleSubmit}>
          <QuestionForm
            />
          <RaisedButton
            label="Generate Poll"
            type="submit"/>
        </form>
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <QuestionFormIndex
          handleStateChange={this.handleStateChange}
          pollForm={this.state}
          />
        <RaisedButton
          label="Generate Poll"
          type="submit"/>
      </form>
    )
  }
}

export default CreatePoll;
