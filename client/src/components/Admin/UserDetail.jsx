// UserDetail.jsx

import React from 'react';
import './UserDetail.css';

const UserDetail = ({ userId }) => {
  // Sample user data for demonstration
  const user = {
    id: userId,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active'
  };

  return (
    <div className="user-detail-container">
      <h2>User Detail</h2>
      <div className="user-detail">
        <div className="detail-item">
          <span className="label">Name:</span>
          <span className="value">{user.name}</span>
        </div>
        <div className="detail-item">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
        </div>
        <div className="detail-item">
          <span className="label">Role:</span>
          <span className="value">{user.role}</span>
        </div>
        <div className="detail-item">
          <span className="label">Status:</span>
          <span className={`value status-${user.status.toLowerCase()}`}>{user.status}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
