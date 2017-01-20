import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import TakePollIndexContainer from "../take_poll_index/take_poll_index_container";

import RaisedButton from 'material-ui/RaisedButton';

class Dash extends React.Component {
  render () {

    if (this.props.currentUser === null) {
      return (<div></div>);
    } else {

    let liveUrlIsValid =
    (typeof this.props.currentUser.live_url === "string")
    && (typeof this.props.currentUser.live_group === "string");

    let liveUrl = liveUrlIsValid ?
                    "/live/".concat(this.props.currentUser.live_url) : "/new";

    return (
      <div>
        <br/>
        <br/>
        <span className=
          "flex-span">
        <RaisedButton
          containerElement={<Link to="new" />}
          label="Create New Poll"
          disabled={true}/>
        <br/>
          <RaisedButton
            label="Take Polls"
            primary={true}
            disabled={true}/>
        <br/>
        <RaisedButton
          containerElement={<Link to={liveUrl}/>}
          label="Go To My Live Poll"
          primary={true}/>
      </span>
        <br/>
        <TakePollIndexContainer/>
        <br/>
      </div>
    );}
  }
}

export default withRouter(Dash);
