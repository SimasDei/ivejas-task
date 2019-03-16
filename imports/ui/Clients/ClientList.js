import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Clients } from '../../api/clients';

import ClientItem from './ClientItem';

export class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }
  componentDidMount() {
    this.clientsTracker = Tracker.autorun(() => {
      Meteor.subscribe('clients');
      const clients = Clients.find().fetch();
      this.setState({ clients });
    });
  }
  componentWillUnmount() {
    this.clientsTracker.stop();
  }

  renderClientList = () => {
    const { clients } = this.state;
    return clients.map(client => (
      <ClientItem key={client._id} client={client} />
    ));
  };

  render() {
    return (
      <div className="product-list">
        <h4 className="item__header">Client List</h4>
        <div>{this.renderClientList()}</div>
      </div>
    );
  }
}

export default ClientList;
