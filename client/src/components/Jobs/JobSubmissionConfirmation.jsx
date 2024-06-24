import React from 'react';
import './JobSubmissionConfirmation.css';

const JobSubmissionConfirmation = () => {
  return (
    <div className="confirmation-container">
      <h2>Job Submitted</h2>
      <p className="confirmation-message">
        Your job description has been submitted. You will receive your quote in your email once it's processed by the company.
      </p>
    </div>
  );
};

export default JobSubmissionConfirmation;
