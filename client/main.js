import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import ReactDOM from 'react-dom';
import { routes } from '../imports/routes/routes';

import './main.html';

// Tracker.autorun(() => {
//   Meteor.userId();
//   export const isAuthenticated = !!Meteor.userId();
// });

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
