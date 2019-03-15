import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './main.html';

/**
 * @components
 */
import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import Admin from '../imports/ui/Admin';
import Clients from '../imports/ui/Clients';
import Orders from '../imports/ui/Orders';
import Products from '../imports/ui/Products';

/**
 * @routes
 */
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/admin" component={Admin} />
      <Route path="/orders" component={Orders} />
      <Route path="/clients" component={Clients} />
      <Route path="/products" component={Products} />
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
