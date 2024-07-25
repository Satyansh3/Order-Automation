
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userReducer from './../../redux/reducers/userReducers.js';
import "./clientDashboard.css"
import { FaFolder } from "react-icons/fa";
import authService from '../../services/authService.js';
import { setUser } from '../../redux/actions/userActions.js';

const ClientDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.userReducer);
  const savedUser = authService.getUserSession();
  useEffect(() => {
    console.log(savedUser)
    if (!user) {
      navigate("../client-login");
    } else {
      dispatch(setUser(savedUser));
    }
  }, [dispatch, navigate]);

  return (
      <div className="dashboard-container">
        <h2>Welcome, {savedUser.username}!</h2>
          <Link to={`../jobs?username=${savedUser.username}`} className="folder-link">
            <FaFolder className="folder-icon"/>
            <span className="folder-text">{savedUser.username}'s folder</span>
          </Link>
      </div>
  );
}

export default ClientDashboard;