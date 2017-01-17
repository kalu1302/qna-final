import React from 'react';
import { Link, withRouter } from 'react-router';
import TakePollModal from "../take_poll/take_poll_modal";

import RaisedButton from 'material-ui/RaisedButton';

class Dash extends React.Component {
  render () {
    return (
      <div>
        <br/>
        <br/>
        <RaisedButton
          containerElement={<Link to="new" />}
          label="Create New Poll"/>
        <br/>
        <br/>
        <TakePollModal/>
      </div>
    );
  }
}

export default withRouter(Dash);
