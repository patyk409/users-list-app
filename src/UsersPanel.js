import React, { Component } from 'react';
import './UsersPanel.css';
import UsersList from './UsersList';

class UsersPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userInputValue: ''
    };
  };

  setUserInputValue = event => {
    this.setState({
      userInputValue: event.target.value
    });
  };

  addUser = event => {
    event.preventDefault();

    if (this.state.userInputValue !== '') {
      let newUser = {
        id: Date.now(),
        name: this.state.userInputValue
      };
  
      this.setState(state => {
        return ({
          users: state.users.concat(newUser)
        });
      });
    } else {
      console.log('Podaj swoje imię!!')
    };

    this.setState({
      userInputValue: ''
    })
  };

  removeUser = userId => {
    this.setState(state => {
      return ({
        users: state.users.filter(user => user.id !== userId)
      });
    });
  };

  render() {
    return (
      <div className="users-panel">
        <form onSubmit={this.addUser}>
          <input onChange={this.setUserInputValue} type="text" placeholder="Enter your name..." value={this.state.userInputValue} />
          <button type="submit">Add user</button>
        </form>
        <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
      </div>
    );
  };
};

export default UsersPanel;
