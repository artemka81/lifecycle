import React, { Component } from 'react';
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
            <h1>Modal</h1>
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
