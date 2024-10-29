import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SubmissionSuccessPage = () => {
  return (
    <div className="success-page">
      <FontAwesomeIcon icon={faCircleCheck} />
      <h1>Subscription Successful!</h1>
      <p>Thank you for subscribing to our newsletter!</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default SubmissionSuccessPage;
