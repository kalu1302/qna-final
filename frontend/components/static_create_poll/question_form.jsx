import React from 'react';

import { FlatButton} from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class QuestionForm extends React.Component {

  handleSubmit() {

  }

  render() {
    const info = this.props.OneQuestionInfo;
    const handleStateChange = this.props.handleStateChange;


    return (
            <div>
            <TextField
              floatingLabelText={"Question"}
              value={info.question}
              onChange={handleStateChange("question")}>
            </TextField>
            <br/>
            <TextField
              floatingLabelText="Test type"
              value={info.type}
              onChange={handleStateChange("type")}>
            </TextField>
            <RaisedButton
              label="Add Question"
              />
          </div>
  );
  }
}

export default QuestionForm;
