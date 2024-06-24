
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userReducer from './../../redux/reducers/userReducers.js';
import "./clientDashboard.css"
import { FaFolder } from "react-icons/fa";

const ClientDashboard = () => {
  const users = useSelector(state => state.userReducer)
  return (
    <div className="dashboard-container">
      <h2>Welcome, {users.username}!</h2>
        <Link to={`../jobs?username=${users.username}`} className="folder-link">
          <FaFolder className="folder-icon"/>
          <span className="folder-text">{users.username}'s folder</span>
        </Link>
  </div>
  )
}

export default ClientDashboard;
