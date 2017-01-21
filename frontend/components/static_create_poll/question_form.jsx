import React from 'react';

import { FlatButton} from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class QuestionForm extends React.Component {

  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let question = {[this.props.index]: e.target.value};
    this.receiveQuestionData(question);
  }

  render() {
    const question = this.props.question;
    const index = this.props.index;
    const receiveAnswerData = this.props.receiveAnswerData;
    const receiveQuestionData = this.props.receiveQuestionData;

    //TODO implement answers
    const renderAnswers = "";

    return (
            <div>
            <TextField
              floatingLabelText={"Question: ".concat(index)}
              value={question.body}
              onChange={this.handleOnChange}>
            </TextField>
            {renderAnswers}
          </div>
  );
  }
}

export default QuestionForm;
