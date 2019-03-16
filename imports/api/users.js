import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

Accounts.validateNewUser(user => {
  const email = user.emails[0].address;

  try {
    new SimpleSchema({
      email: {
        type: String,
        min: 1,
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({ email });
    return true;
  } catch (error) {
    throw new Meteor.Error(400, error.message);
  }
});
