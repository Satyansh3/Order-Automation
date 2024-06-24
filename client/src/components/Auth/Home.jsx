import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website</h2>
      <div className="login-options">
        <Link to="/client-login" className="login-option">
          Client Login
        </Link>
        <Link to="/admin-login" className="login-option">
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
