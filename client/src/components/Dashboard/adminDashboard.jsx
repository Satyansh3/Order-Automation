// AdminDashboard.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import userReducer from '../../redux/reducers/userReducers';
import { useDispatch, useSelector } from 'react-redux';
import { FaFolder } from "react-icons/fa";
import "./adminDashboard.css"

const AdminDashboard = () => {
  const usersn = useSelector(state => state.adminReducer.users)
  console.log(usersn)
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        {usersn.map(user => (
          <li key={user.email}>
            <Link to={`/admin/jobs/${user.username}?clientEmail=${user.email}`} className="folder-link">
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