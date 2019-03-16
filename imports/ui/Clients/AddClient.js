import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class AddClient extends Component {
  handleAddClient = e => {
    e.preventDefault();
    const name = this.refs.name.value.trim();
    if (name) {
      Meteor.call('client.insert', name);
      this.refs.name.value = '';
    }
  };
  render() {
    return (
      <div className="product-form">
        <form className="product-form__form" onSubmit={this.handleAddClient}>
          <input type="text" ref="name" placeholder="Name " />
          <button className="button">Add Client</button>
        </form>
      </div>
    );
  }
}

export default AddClient;
