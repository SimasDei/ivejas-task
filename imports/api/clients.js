import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

const clientsSchema = new SimpleSchema({
  name: {
    type: String,
    min: 1
  },
  orders: {
    type: Number,
    optional: true
  }
});
