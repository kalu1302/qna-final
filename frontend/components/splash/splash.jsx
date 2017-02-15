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
      <div>

        <div className="fill-screen">

          <img className="make-it-fit" src="assets/creative.jpeg"
               onClick={this.handleClick.bind(this)}/>

          <div className="float-text">
            Easy and Quick QnA's :
            <br/>
            Polls for the classroom
            <br/>
            Quizzes for homework
          </div>

          <div className="demo-button">
            <RaisedButton
              label="Log me in and show me the features!"/>
          </div>


        </div>

      </div>
    );
  }
}

export default withRouter(Splash);
