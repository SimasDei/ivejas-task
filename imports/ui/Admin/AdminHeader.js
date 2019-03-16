import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';

const AdminHeader = props => {
  return (
    <div className="header">
      <div className="header_content">
        <h3 className="header__title">Admin Panel</h3>
        <button
          className="button button--nav-link"
          onClick={() => {
            Accounts.logout();
            props.history.push('/');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default withRouter(AdminHeader);
