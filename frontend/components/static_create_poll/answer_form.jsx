import React from 'react';

import { FlatButton} from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class AnswerForm extends React.Component {

  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let qId = this.props.questionIndex;
    let answer = {[qId]: {answers: {[this.props.index]: e.target.value}}};

    this.receiveAnswerData(answer);
  }

  render() {
    const question_index = this.props.question_index;
    const index = this.props.index;
    const answer = this.props.group[question_index]answers[index];

    return (
            <div>
            <TextField
              floatingLabelText={"Answer: ".concat(index)}
              value={answer.body}
              onChange={this.handleOnChange}>
            </TextField>
          </div>
  );
  }
}

export default AnswerForm;
