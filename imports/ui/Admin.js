import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export class Admin extends Component {
  handleLogout = () => {
    Accounts.logout();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>Admin Page</p>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Admin;
