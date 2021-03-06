import React from 'react';

import { FlatButton} from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class AnswerForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {value: ""};

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({value: e.target.value});

    let qId = this.props.questionIndex;
    let answer = {[qId]: {answers: {[this.props.index]: {body: e.target.value}}}};

    this.props.receiveAnswerData(answer);
  }

  render() {
    const question_index = this.props.question_index;
    const index = this.props.index;
    const answer = this.props.answer;

    return (
            <div>
            <TextField
              floatingLabelText={"Answer: ".concat(parseInt(index) + 1)}
              value={this.state.value}
              onChange={this.handleOnChange}>
            </TextField>
          </div>
  );
  }
}

export default AnswerForm;
