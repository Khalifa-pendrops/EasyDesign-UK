import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function ErrorPage() {
  return (
    <div className="modal-overlay">
      <div className="modal-content bg-muted container-xxl py-5 d-flex flex-column justify-content-center align-items-center gap-3 h-100 rounded rounded-3 border my-4 w-50">
        <FontAwesomeIcon
          className="error-icon bg-warning"
          icon={faCircleXmark}
        />
        <h2 className="">Error!</h2>
        <p className="error-text text-center fs-6">
          There was a problem with your subscription. Please try again later.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
