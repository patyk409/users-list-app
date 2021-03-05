import React from 'react';
import './UserInterface.css';
import UserPanel from './UserPanel';

const UserInterface = props => {
  return (
    <div className="container">
      <h1>React App - User's List</h1>
      <UserPanel />
    </div>
  );
};

export default UserInterface;