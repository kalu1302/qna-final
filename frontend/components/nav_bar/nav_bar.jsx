import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class NavBar extends React.Component{

  constructor() {
    super();
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
          <ToolbarTitle text="QnA" />
        </ToolbarGroup>
        {buttons}
      </Toolbar>
    );
  }
}

export default withRouter(NavBar);
