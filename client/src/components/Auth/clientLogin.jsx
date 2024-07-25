import React, { useState } from "react"
import authService from "../../services/authService.js";
import userService from "../../services/userService.js";
import { setUser } from "../../redux/actions/userActions.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import "./clientLogin.css"
import { addUser } from "../../redux/actions/adminActions.js";

const Login = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loggedInUser = useSelector(state => state.userReducer)
  // console.log(loggedInUser)
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      if (loggedInUser.email === email) {
        dispatch(setUser(loggedInUser))
        navigate("../client-dashboard")
      }
      else {
        await authService.sendOTP(email);
        console.log('Done');
        const userData = {
          username: username,
          email: email
        }
        dispatch(addUser(userData))
        dispatch(setUser({ username, email }))
        navigate('../otp-verification');
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Failed to verify OTP. Please try again.');
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Send OTP</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
}
export default Login;