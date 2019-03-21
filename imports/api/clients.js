import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from './products';

export const Clients = new Mongo.Collection('clients');

if (Meteor.isServer) {
  Meteor.publish('clients', function() {
    return Clients.find({ userId: this.userId });
  });
}

/**
 * @methods - Add and Delete Clients
 */
Meteor.methods({
  'client.insert'(name) {
    if (!this.userId) {
      throw new Meteor.Error('No.', 'Not allowed!');
    }
    if (name.length <= 0) {
      throw new Meteor.Error('Nope', 'There must be an Input');
    }
    Clients.insert({
      name,
      userId: this.userId
    });
  },
  'clients.delete'(clientId) {
    Clients.remove(clientId);
  }
});
