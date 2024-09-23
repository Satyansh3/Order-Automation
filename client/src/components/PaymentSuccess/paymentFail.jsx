import React from 'react';
import './paymentSuccess.css';

const PaymentFail = () => {
  return (
    <div className="payment-success-container">
      <div className="card">
        <div className="card-body">
          <div className="alert success">Payment Failed!</div>
          <h2>Your payment has been failed</h2>
          <p className="card-text">
            Your payment has been declined
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default PaymentFail
