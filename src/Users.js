import React, { useState } from 'react';
import './Users.css';
import UsersList from './UsersList';

const Users = () => {
  let [users, setUsers] = useState([]);
  let [inputValue, setInputValue] = useState('');

  const setUserInputValue = event => {
    setInputValue(inputValue = event.target.value);
  };

  const addUser = event => {
    event.preventDefault();

    let newUser = {
      id: Date.now(),
      name: inputValue
    };

    setUsers(users = users.concat(newUser));

    setInputValue(inputValue = '');
  };

  const removeUser = userId => {
    setUsers(users = users.filter(user => user.id !== userId));
  };

  return (
    <div className="users-panel">
      <form onSubmit={addUser}>
        <input type="text" placeholder="Enter your name..." onChange={setUserInputValue} value={inputValue} />
        <button type="submit">Add user</button>
      </form>
      <UsersList usersList={users} removeUser={removeUser} />
    </div>
  );
};

export default Users;