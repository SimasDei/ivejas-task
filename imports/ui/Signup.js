import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.refs;
    email = email.value.trim();
    password = password.value.trim();

    Accounts.createUser({ email, password }, err => {
      err ? this.setState({ error: err.reason }) : null;
    });
  };

  render() {
    return (
      <div>
        <p>SignUp</p>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <input ref="email" type="email" name="email" placeholder="Email" />
          <input
            ref="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Sign Up</button>
        </form>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default Signup;
