
import React, { useState } from 'react';
import authService from "../../services/authService.js"
import './OTPVerification.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userReducer from './../../redux/reducers/userReducers';

const OTPVerification = () => {
  const users = useSelector(state => state.userReducer)
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.verifyOTP(users.username, users.email, otp)
      console.log(response)
      if (response.ok) {
        console.log(users.email, users.username)
        console.log('Verification done')
        navigate("../client-dashboard")
      }
      else{
        console.error('Error verifying the otp')
      }
    }
    catch (error) {
      // dispatch(verifyOtpFailure)
      console.error(error)
      setErrorMessage('Failed to verify OTP. Please try again.');
    }
  };

  return (
    <div className="otp-verification-container">
      <h2>OTP Verification</h2>
      <form onSubmit={handleVerifyOTP} className="otp-verification-form">
        <div className="form-group">
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Verify OTP</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default OTPVerification;
