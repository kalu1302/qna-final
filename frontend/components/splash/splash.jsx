import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import TakePollIndexContainer from "../take_poll_index/take_poll_index_container";

import RaisedButton from 'material-ui/RaisedButton';

class Splash extends React.Component {

  constructor() {
    super();
  }

  handleClick() {
    hashHistory.push("/signup");
  }

  render () {

    return (
      <div className="fill-screen">
        <img className="make-it-fit" src="assets/creative.jpeg"
             onClick={this.handleClick.bind(this)}/>
           <div className="float-text">
             Express Yourself :
             <br/>
             Take Polls, Make Polls
             <br/>
             Share and Create
             </div>
      </div>
    );
  }
}

export default withRouter(Splash);
