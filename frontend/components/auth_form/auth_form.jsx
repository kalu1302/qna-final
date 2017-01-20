import React from 'react';
import { Router, Link, withRouter, RouterContext } from 'react-router';
import LoginView from './login_view';
import SignupView from './signup_view';

//TODO remove if not using material-ui
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
//logout, signup, login available actions

class AuthForm extends React.Component{
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username:"", password:""};
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    const formType = location.hash.substring(2);
    if (formType === "login") {
      this.props.login({user: this.state});
    } else {
      this.props.signup({user: this.state});
    }

    //TODO won't redirect sync?
    if (this.props.currentUser) {
      context.router.push("/create");
    }
  }

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    // const formView = formType === "login" ? {LoginView} : {SignupView};
    const formType = location.hash.substring(2);
    return (
      <div className="centerform">
        <h2>{formType.concat(":")}</h2>
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText="username"
              value={this.state.username}
              onChange={this.updateField("username")}>
            </TextField>
            <br/>
            <TextField
              floatingLabelText="password"
              type="password"
              value={this.state.password}
              onChange={this.updateField("password")}>
            </TextField>
            <br/>
            <br/>
            <br/>
            <RaisedButton
              label={formType}
              primary={true}
              type="submit"/>
          </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
