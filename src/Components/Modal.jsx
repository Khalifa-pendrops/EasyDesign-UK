import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {children}
      <button
        className="modal-btn btn bg-primary text-muted rounded rounded-3 text-md"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
