import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class TakePollModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchQuestions = this.props.fetchQuestions.bind(this);
    this.groupId = this.props.groupId;
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
    this.fetchQuestions(this.groupId);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const info = this.props.takePoll;
    debugger
    return (
      <div>
        <Card onClick={this.openModal}>
          <CardHeader
            title={"Poll: ".concat(this.groupId, " ", info.name)}/>
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

          <h3>{"Poll: ".concat(this.groupId)}</h3>

          <RaisedButton
            onClick={this.closeModal}
            label="Back to Dash"
            secondary={true}/>

          <form>
            <RaisedButton label={info.questions[0]}/>
          </form>

        </Modal>
      </div>
    );
  }
}

export default TakePollModal;
