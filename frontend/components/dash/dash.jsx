import React from 'react';
import { Link, withRouter } from 'react-router';
import TakePollModal from "../take_poll/take_poll_modal";

import { Grid, Row, Cell } from 'react-inline-grid';

import RaisedButton from 'material-ui/RaisedButton';

class Dash extends React.Component {
  render () {
    return (

      <div>
        <h3>Stand in splash image...</h3>
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
        <Grid>
          <Row is="around">
            <Cell is="3">
              <TakePollModal groupId={0}/>
            </Cell>
            <Cell is="3">
              <TakePollModal groupId={1}/>
            </Cell>
            <Cell is="3">
              <TakePollModal groupId={2}/>
            </Cell>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Dash);
