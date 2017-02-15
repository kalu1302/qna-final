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

    let liveUrlIsValid = false;
    let liveUrl = "";

    //create live_url and link
    if (currentUser) {
    liveUrlIsValid =
    (typeof this.props.currentUser.live_url === "string")
    && (typeof this.props.currentUser.live_group === "string");

    liveUrl = liveUrlIsValid ?
                    "/live/".concat(this.props.currentUser.live_url) : "/new";
    }
    const NavLoggedIn =
    (
      <ToolbarGroup>
        <RaisedButton
          containerElement={<Link to="/new" />}
          label="Create New"
          primary={true}
          disabled={url === "#/new"}/>
        <ToolbarSeparator />
        <RaisedButton
          containerElement={<Link to={liveUrl}/>}
          label="My Classroom"
          primary={true}
          disabled={!liveUrlIsValid || url === `#${liveUrl}`}/>
        <ToolbarSeparator />
        <RaisedButton
          containerElement={<Link to="/create" />}
          label="My GradeBook"
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
