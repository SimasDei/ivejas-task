import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';

const AdminHeader = props => {
  return (
    <div>
      <h3>Admin Panel</h3>
      <button
        onClick={() => {
          Accounts.logout();
          props.history.push('/');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default withRouter(AdminHeader);
