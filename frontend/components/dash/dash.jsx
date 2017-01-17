import React from 'react';
import { Link, withRouter } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class Dash extends React.Component {
  render () {
    return (
      <div>
        <RaisedButton
          containerElement={<Link to="new" />}
          label="Create New Poll"/>
      </div>
    );
  }
}

export default withRouter(Dash);
