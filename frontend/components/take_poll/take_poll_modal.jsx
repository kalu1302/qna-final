import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class TakePollModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    //pull from db into store
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const groupId = this.props.groupId;

    return (
      <div>
        <Card onClick={this.openModal}>
          <CardHeader
            title={"Poll: ".concat(groupId)}/>
          <br/>
          <CardMedia>
            <img src="assets/happy.svg"
                 width="60" height="60"
                 onClick={this.openModal}/>
          </CardMedia>
          <br/>
          <CardActions>
            <FlatButton
              onClick={this.openModal}
              label="Take This Poll"
              primary={true}/>
          </CardActions>
        </Card>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Poll">

          <h3>{"Poll: ".concat(groupId)}</h3>

          <RaisedButton
            onClick={this.closeModal}
            label="Back to Dash"
            secondary={true}/>

          <form>
            <input />
            <button>answer</button>
          </form>

        </Modal>
      </div>
    );
  }
}

export default TakePollModal;
