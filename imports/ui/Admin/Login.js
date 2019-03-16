import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export class Login extends Component {
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

    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        this.setState({ error: err.reason });
      } else this.props.history.push('/admin');
    });
  };

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}

          <form className="boxed-view__form" onSubmit={this.handleSubmit}>
            <input ref="email" type="email" name="email" placeholder="Email" />
            <input
              ref="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="button">Login</button>
          </form>
          <p>
            No Account ? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
