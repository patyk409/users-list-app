import React from 'react';
import './UserPanel.css';
import Button from './Button';

const UserPanel = props => {
  return (
    <div className="user-panel">
      <input type="text" placeholder="Enter your name" />
      <Button />
    </div>
  );
};

export default UserPanel;