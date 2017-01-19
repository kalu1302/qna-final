import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TakePollItem from './take_poll_item';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class TakePollModal extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchQuestions = this.props.fetchQuestions;
    this.groupId = this.props.groupId;
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    //pull from db into store
  }

  openModal() {
    this.fetchQuestions(this.groupId);
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    return (
      <div  className="poll-index-item-container"
            onClick={this.openModal}>
        <div className="poll-index-item"
          onClick={this.openModal}>
          <h3>
            {"Poll: ".concat(this.groupId, " ")}
          </h3>
          <br/>
          <img src="assets/happy.svg"
               onClick={this.openModal}/>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Poll">
          <TakePollItem
            takePoll={this.props.takePoll}
            submitPollAnswers={this.props.submitPollAnswers}
            currentUser={this.props.currentUser}
            closeModal={this.closeModal}/>
          <RaisedButton
            onClick={this.closeModal}
            label="Back to Dash"
            secondary={true}/>
        </Modal>
      </div>
    );
  }
}

export default TakePollModal;
