import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TakePollItem from './take_poll_item';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

//temp
const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};



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

  componentWillUnmount() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const classic = (
        <div className="poll-index-item"
          onClick={this.openModal}>
            <h4>{"Poll ".concat(this.groupId, " ")}</h4>
          <img src="assets/question.jpg"
               onClick={this.openModal}/>
        </div>
    );

    const floating = (
      <div>
        <FloatingActionButton style={style} onClick={this.openModal}>
          Take Poll
        </FloatingActionButton>
      </div>
    );

    const buttonRender = this.props.float ? floating : "";

    return (
      <div>
        {buttonRender}
        <div  className="poll-index-item-container"
              onClick={this.openModal}>
          {classic}
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Poll">
            <RaisedButton
              onClick={this.closeModal}
              label="Back to Dash"
              secondary={true}/>
            <TakePollItem
              takePoll={this.props.takePoll}
              submitPollAnswers={this.props.submitPollAnswers}
              currentUser={this.props.currentUser}
              closeModal={this.closeModal}/>
          </Modal>
        </div>
      </div>
    );
  }
}

export default TakePollModal;
