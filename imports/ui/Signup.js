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

    if (password.length < 4) {
      return this.setState({ error: 'Password Too Short min 4 characters' });
    }

    Accounts.createUser({ email, password }, err => {
      err
        ? this.setState({ error: err.reason })
        : this.props.history.push('/admin');
    });
  };

  render() {
    return (
      <div>
        <p>SignUp</p>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.handleSubmit} noValidate>
          <input ref="email" type="email" name="email" placeholder="Email" />
          <input
            ref="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Sign Up</button>
        </form>
        <p>
          Have an Account ? <Link to="/">Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
