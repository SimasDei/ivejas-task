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
  },
  'clients.addOrder'(product, clientId) {
    if (!product) {
      throw new Meteor.Error('Please select a Product');
    }
    if (product.storage <= 0) {
      throw new Meteor.Error('No more Products');
    }
    Clients.update(
      { _id: clientId },
      {
        $push: {
          orders: {
            id: new Mongo.ObjectID()._str,
            productId: product._id,
            title: product.title,
            count: 1
          }
        }
      }
    );
  },
  'clients.orderDelete'(clientId, orderId) {
    Clients.update(
      { _id: clientId },
      {
        $pull: {
          orders: {
            id: orderId
          }
        }
      },
      { multi: true }
    );
  }
});
