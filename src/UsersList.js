import React from 'react';
import './UsersList.css';

const UsersList = props => {
  let usersList = props.usersList;
  let usersListElement = usersList.map(user => <li key={user.id}>{user.name}<i onClick={() => props.removeUser(user.id)} className="fas fa-times"></i></li>);

  return (
    <ul className="users-list">
      {usersListElement}
    </ul>
  );
};

export default UsersList;
