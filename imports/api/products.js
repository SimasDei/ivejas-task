import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection('products');

if (Meteor.isServer) {
  Meteor.publish('products', function() {
    return Products.find({ userId: this.userId });
  });
}

/**
 * @methods - Add and Delete Products
 */
Meteor.methods({
  'products.insert'(title, description) {
    if (!this.userId) {
      throw new Meteor.Error('No.', 'Not allowed!');
    }
    if (title.length <= 0 || description.length <= 0) {
      throw new Meteor.Error('Nope', 'There must be an Input');
    }
    Products.insert({
      title,
      userId: this.userId,
      description,
      count: 1
    });
  },
  'products.delete'(productId) {
    Products.remove(productId);
  }
});
