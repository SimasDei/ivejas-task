import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
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
