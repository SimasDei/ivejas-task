import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import './main.html';

/**
 * @components
 */
import Signup from '../imports/ui/Signup';

Meteor.startup(() => {
  ReactDOM.render(<Signup />, document.getElementById('app'));
});
