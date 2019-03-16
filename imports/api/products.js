import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const productsSchema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  count: {
    type: Number
  }
});

export const Products = new Mongo.Collection('products');

if (Meteor.isServer) {
  Meteor.publish('products', () => {
    return Products.find();
  });
}
