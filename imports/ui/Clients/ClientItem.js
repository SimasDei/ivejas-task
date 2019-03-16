import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class ClientItem extends Component {
  constructor(props) {
    super(props);
  }

  handleClientDelete = () => {
    Meteor.call('clients.delete', this.props.client._id);
  };

  render() {
    const { client } = this.props;
    return (
      <div className="item">
        <h3>{client.title}</h3>
        <p className="item__paragraph">{client.description}</p>

        <button
          className="button button--delete"
          onClick={this.handleClientDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ClientItem;
