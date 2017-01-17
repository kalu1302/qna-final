import React from 'react';
import { Link, withRouter } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class Test extends React.Component {
  render () {
    return (
      <div>
        <RaisedButton
          containerElement={<Link to="/" />}
          label="Testing Testing"/>
      </div>
    );
  }
}

export default withRouter(Test);
