import React from 'react';

import { FlatButton} from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

import AnswerForm from './answer_form';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
  }

  handleAddAnswer(e) {

    let newInd = 1 + parseInt(Object.keys(this.props.question.answers).sort((a,b) => (b - a))[0]);
    let qId = this.props.index;
    let newAnswer = {[qId]: {answers: {[newInd]: {body: e.target.value, type: "closed"}}}};
    this.props.receiveAnswerData(newAnswer);
  }

  handleOnChange(e) {
    this.setState({value: e.target.value});
    let question = {[this.props.index]: { body: e.target.value }};

    this.props.receiveQuestionData(question);
  }

  render() {

    const question = this.props.question;
    const index = this.props.index;
    const receiveAnswerData = this.props.receiveAnswerData;
    const receiveQuestionData = this.props.receiveQuestionData;

    //TODO implement answers
    const renderAnswers = Object.keys(question.answers).map((ind) => (
      <AnswerForm
        receiveAnswerData={receiveAnswerData}
        questionIndex={index}
        key={ind}
        index={ind}
        answer={question.answers[ind]}/>
    ));

    return (
            <div>
            <TextField
              floatingLabelText={"Question: ".concat(parseInt(index) + 1)}
              value={this.state.value}
              onChange={this.handleOnChange}
              hintText="New Question"
              fullWidth={true}>
            </TextField>
            {renderAnswers}
            <RaisedButton
              label="Add A New Answer"
              onClick={this.handleAddAnswer}
              />
            <br/>
          </div>
  );
  }
}

export default QuestionForm;
