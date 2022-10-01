import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }
  onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  onKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.onBackdropClick}>
        <div className={s.content}>
          <img
            src={this.props.imgModal.img}
            alt={this.props.imgModal.alt}
            className={s.modalImage}
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgModal: PropTypes.object.isRequired,
};

export default Modal;
