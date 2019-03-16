import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>SignUp</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}
          <form
            className="boxed-view__form"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <input ref="email" type="email" name="email" placeholder="Email" />
            <input
              ref="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="button">Sign Up</button>
          </form>
          <p>
            Have an Account ? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
