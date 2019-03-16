import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export class AdminHeader extends Component {
  handleLogout = () => {
    Accounts.logout();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h3>Admin Panel</h3>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default AdminHeader;
