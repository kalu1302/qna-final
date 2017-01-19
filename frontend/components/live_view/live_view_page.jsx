import React from 'react';
import { Link, withRouter } from 'react-router';
import TakePollContainer from "../take_poll/take_poll_container";

import RaisedButton from 'material-ui/RaisedButton';

class LiveViewPage extends React.Component {
  render () {
    this.props.

    return (
      <div>
        <br/>
        <TakePollContainer/>
        <br/>

      </div>
    );
  }
}

export default withRouter(LiveViewPage);
