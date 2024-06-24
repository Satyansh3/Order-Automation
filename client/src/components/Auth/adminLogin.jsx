import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "./authentication.js";
import { authorizeAdmin } from "./authorization.js";
import "./adminLogin.css"; // Update CSS file path

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(authenticateUser(username,password)){
      if(authorizeAdmin("admin")){ // Assuming the user role is hardcoded to "admin"
        navigate("/admin-dashboard")
      }
      else{
        setErrorMessage("You are not authorized to access this page")
      }
    }
    else{
      setErrorMessage("Incorrect username and password")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
