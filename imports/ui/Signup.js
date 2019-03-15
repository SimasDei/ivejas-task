import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>SignUp</p>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default Signup;
