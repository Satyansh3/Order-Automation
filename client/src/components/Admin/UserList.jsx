// UserList.jsx

import React from 'react';
import './UserList.css';

const UserList = () => {
  // Sample user data for demonstration
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Tom Brown', email: 'tom@example.com' }
  ];

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
