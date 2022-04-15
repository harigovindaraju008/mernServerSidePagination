import React from "react";

// Styles
import "./style.css";

const Modal = props => {
  const { children, title } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content__title">{title}</div>
        <div className="modal-content__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
