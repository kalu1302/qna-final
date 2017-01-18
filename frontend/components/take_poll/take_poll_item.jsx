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

    this.state = {currentQuestionIndex: 0};
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
    this.invalidQuestionShift = this.invalidQuestionShift.bind(this);
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

  render() {

    const info = this.props.takePoll;

    const currentQuestion = info.questions[this.state.currentQuestionIndex];

    const answers = currentQuestion.answers;
    const answerChoices = answers.map(
      item => (
        <RadioButton
          key={item.id}
          ref={item.id}
          value={item.answer}
          label={item.answer}
          style={styles.radioButton}/>
      ));


    return (
      <div>
        <h4>{"Poll: ".concat(info.name)}</h4>
        <h3>{"Question: ".concat(currentQuestion.body)}</h3>
        <RadioButtonGroup name={currentQuestion.body}>
          {answerChoices}
        </RadioButtonGroup>
        <RaisedButton
          ref="prev"
          label="Prev Question"
          onClick={this.handlePrevQuestion}
          disabled={this.invalidQuestionShift(-1)}/>
        <h3> Navigate Poll </h3>
        <RaisedButton
          ref="next"
          label="Next Question"
          onClick={this.handleNextQuestion}
          disabled={this.invalidQuestionShift(1)}/>
      </div>
    );
  }
}

export default TakePollItem;
