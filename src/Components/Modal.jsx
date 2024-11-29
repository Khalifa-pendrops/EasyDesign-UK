import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className=" modal-content bg-muted container-sm py-5 d-flex flex-column justify-content-center align-items-center gap-3 h-100 rounded rounded-3 border my-4 w-50">
        {children}
        <button onClick={onClose} className="modal-close px-4">
          Ok
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;



