import React from 'react';
import './paymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="card">
        <div className="card-body">
          <div className="alert success">Payment Successful!</div>
          <h2>Thank You for Your Purchase</h2>
          <p className="card-text">
            Your payment has been processed successfully
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
