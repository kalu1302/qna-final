import React from 'react';
import { Link, withRouter } from 'react-router';
import TakePollIndexContainer from "../take_poll_index/take_poll_index_container";

import { Grid, Row, Cell } from 'react-inline-grid';

import RaisedButton from 'material-ui/RaisedButton';

class Dash extends React.Component {
  render () {

    let liveUrlIsValid =
    (typeof this.props.currentUser.live_url === "string")
    && (typeof this.props.currentUser.live_group === "string");

    let liveUrl = liveUrlIsValid ?
                    "/live/".concat(this.props.currentUser.live_url) : "/new";

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
        <br/>
        <RaisedButton
          containerElement={<Link to={liveUrl}/>}
          label="Go To My Live Poll"/>
        <br/>
        <TakePollIndexContainer/>
        <br/>

      </div>
    );
  }
}

export default withRouter(Dash);
