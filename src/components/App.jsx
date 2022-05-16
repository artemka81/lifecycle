import React, { Component } from 'react';
import Clock from './Clock';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Clock />
            <button type="button" onClick={this.toggleModal}>
              X Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
