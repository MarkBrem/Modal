import React, { Component } from "react";
import Modal from "./Modal";

export class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <div>
        <h1>Модальне вікно на класах</h1>
        <button onClick={this.openModal}>Відкрити модальне вікно</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <h2>Привіт!</h2>
          <p>Це модальне вікно.</p>
        </Modal>
      </div>
    );
  }
}
