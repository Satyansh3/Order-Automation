// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userReducer from '../../redux/reducers/userReducers';
import { useDispatch, useSelector } from 'react-redux';
import { FaFolder } from "react-icons/fa";
import "./adminDashboard.css"
import userService from '../../services/userService.js';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAllUsers(); // Fetch users from database
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    
    fetchUsers();
  }, []);

  const handleSendPaymentLink = async (user, jobId, amount) => {
    try {
      await paymentService.initiatePayment(jobId, amount, user.email);
      alert(`Payment link sent to ${user.username}`);
    } catch (error) {
      console.error("Error sending payment link:", error);
      alert('Failed to send payment link');
    }
  };
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map(user => (
          <li key={user.email}>
            <Link to={`/admin/jobs/?username=${user.username}`} className="folder-link">
              <FaFolder className="folder-icon"/>
              <span className="folder-text">{user.username}'s Folder</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;