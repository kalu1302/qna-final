import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.openModal}
          label="Take A Poll"
          secondary={true}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Poll"
        >

          <FlatButton
            onClick={this.closeModal}
            label="Back to Dash"/>
          <form>
            <input />
            <button>test</button>

          </form>
        </Modal>
      </div>
    );
  }
}

export default TakePollModal;
