import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

//temp styling
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};



class TakePollItem extends React.Component {
  constructor(props) {
    super(props);

    //answers: javascript allows noninit access
    this.state = {currentQuestionIndex: 0,
      answers: []
    };
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
    this.invalidQuestionShift = this.invalidQuestionShift.bind(this);
    this.handleRadioSelect = this.handleRadioSelect.bind(this);
    this.incompleteForm = this.incompleteForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.currentAnswered = this.currentAnswered.bind(this);
  }


  componentWillMount() {
  }

  componentDidMount() {
    //pull from db into store
  }

  handleNextQuestion(e) {
    e.preventDefault;
    let currentQuestionIndex = this.state.currentQuestionIndex + 1;
    this.setState({currentQuestionIndex});
  }

  handlePrevQuestion(e) {
    e.preventDefault;
    let currentQuestionIndex = this.state.currentQuestionIndex - 1;
    this.setState({currentQuestionIndex});
  }

  invalidQuestionShift(shift) {
    let questions = this.props.takePoll.questions;
    let currentIndex = this.state.currentQuestionIndex;

    return (typeof questions[ currentIndex + shift ] === 'undefined');
  }

  handleRadioSelect(e, valueSelected) {
    e.preventDefault();
    let new_answers = this.state.answers;
    new_answers[this.state.currentQuestionIndex] = valueSelected;
    this.setState({answers: new_answers});
    console.log("answers: ".concat(this.state.answers));
  }

  handleSubmit(e) {
    e.preventDefault();
    let answers = {user_id: this.props.currentUser.id, answers: this.state.answers};
    this.props.submitPollAnswers(answers);
    this.props.closeModal();
  }

  incompleteForm() {
    let numOfQuestions = this.props.takePoll.questions.length;
    return (numOfQuestions !== this.state.answers.length);
  }

  currentAnswered() {
    return (this.state.answers[this.state.currentQuestionIndex]);
  }

  render() {

    const info = this.props.takePoll;

    const currentQuestion = info.questions[this.state.currentQuestionIndex];

    const answers = currentQuestion.answers;
    const answerChoices = answers.map(
      item => {
        const selected = (this.currentAnswered() === item.id);
        return (

        <RadioButton
          key={item.id}
          ref={item.id}
          value={item.id}
          label={item.answer}
          style={styles.radioButton}
          selected={selected}/>
      );
      });

    return (
      <div className="display-poll">
        <h4>{"Poll: ".concat(info.name)}</h4>
        <h3>{"Question: ".concat(currentQuestion.body)}</h3>
        <RadioButtonGroup
          name={currentQuestion.body}
          onChange={this.handleRadioSelect}
          valueSelected={this.currentAnswered()}>
          {answerChoices}
        </RadioButtonGroup>
        <br/>
        <br/>
        <RaisedButton
          ref="prev"
          label="Prev Question"
          onClick={this.handlePrevQuestion}
          disabled={this.invalidQuestionShift(-1)}/>
        <RaisedButton
          ref="next"
          label="Next Question"
          onClick={this.handleNextQuestion}
          disabled={this.invalidQuestionShift(1)}/>
        <RaisedButton
          ref="submitAnswers"
          label="Finish Poll"
          primary={true}
          onClick={this.handleSubmit}
          disabled={this.incompleteForm()}/>
      </div>
    );
  }
}

export default TakePollItem;
