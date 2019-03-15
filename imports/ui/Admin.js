import React, { Component } from 'react';

export class Admin extends Component {
  handleLogout = () => this.props.history.push('/');
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
