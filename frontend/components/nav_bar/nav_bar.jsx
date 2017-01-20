import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {demoLogin} from '../../actions/session_actions';

class NavBar extends React.Component{

  constructor() {
    super();

  this.handleDemo = this.handleDemo.bind(this);
  }

  handleRedirect() {
    hashHistory.push("/welcome");
  }

  handleDemo(e) {
    e.preventDefault();
    store.dispatch(demoLogin());
  }

  render() {
    const url = location.hash;

    const currentUser = this.props.currentUser;

    const NavLoggedIn =
    (
      <ToolbarGroup>
        <RaisedButton
          containerElement={<Link to="/create" />}
          label="My Dashboard"
          primary={true}
          disabled={url === "#/create"}/>
        <ToolbarSeparator />
            <RaisedButton onClick={this.props.logout} label="Logout"/>
      </ToolbarGroup>
    );

    const NavNotLoggedIn = (
      <ToolbarGroup>
        <RaisedButton
          onClick={this.handleDemo}
          label="Login as Guest"/>
        <ToolbarSeparator />
        <RaisedButton
          containerElement={<Link to="/login" />}
          label="Log in"
          disabled={url === "#/login"}/>
        <ToolbarSeparator />
          <RaisedButton
            containerElement={<Link to="/signup" />}
            label="Sign Up"
            secondary={true}
            disabled={url === "#/signup"}/>
      </ToolbarGroup>
    );

    const buttons = currentUser ? NavLoggedIn : NavNotLoggedIn;

    return (
      <Toolbar>
        <ToolbarGroup>
          <h2>My</h2>
          <ToolbarTitle text="QnA"
            onClick={this.handleRedirect}/>
        </ToolbarGroup>
        {buttons}
      </Toolbar>
    );
  }
}

export default withRouter(NavBar);
