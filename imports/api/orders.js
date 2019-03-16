import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

const ordersSchema = new SimpleSchema({
  productName: {
    type: String,
    min: 1
  },
  productId: {
    type: String
  }
});
