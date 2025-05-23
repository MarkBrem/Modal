import React, { Component } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width:300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && !prevProps.isOpen) {
      console.log("Modal opened");
    }
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onClose, children } = this.props;
    return (
      <ModalOverlay isOpen={isOpen} onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
          <button onClick={onClose}>Закрити</button>
        </ModalContent>
      </ModalOverlay>
    );
  }
}