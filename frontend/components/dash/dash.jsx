import React from 'react';
import { Link, withRouter } from 'react-router';
import TakePollIndexContainer from "../take_poll_index/take_poll_index_container";

import { Grid, Row, Cell } from 'react-inline-grid';

import RaisedButton from 'material-ui/RaisedButton';

class Dash extends React.Component {
  render () {

    return (
      <div>
        <div className="fill-screen">
          <img className="make-it-fit" src="assets/sunset.jpeg"/>
        </div>
        <br/>
        <br/>
        <RaisedButton
          containerElement={<Link to="new" />}
          label="Create New Poll"/>
        <br/>
        <TakePollIndexContainer/>
        <br/>

      </div>
    );
  }
}

export default withRouter(Dash);
