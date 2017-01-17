import React from 'react';
import { Router, Link, withRouter, RouterContext } from 'react-router';
import QuestionFormIndex from './question_form_index';

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
      question_order: [0],
      questions: {
      0: { question: "Enter question here?",
      type: "mc"}
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
    this.getState().question_order.forEach((id) => {
      
    })
  }

  handleSubmit() {
    //checks form and returns true false for if valid
    if (this.frontendValid) {
      //util call
      //store change for next page (renders active poll)
    }

  }

  handleAddQuestion () {
    //create questionCard w appropriate id
  }

  handleStateChange(question_id) {
    return (field) => (e) => {
      let change = this.getState()[question_id];
      change[field] = e.target.value;
      this.setState({[question_id]: change});
    }
  }

  render () {

    const test = (
      <div>
        <form>
          <QuestionFormIndex
            handleStateChange={this.handleStateChange}
            pollForm={this.getState()}
            />
          <RaisedButton
            label="Generate Poll"/>
        </form>
      </div>
    );

    return ({test});
  }
}

export default CreatePoll;
