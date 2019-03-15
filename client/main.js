import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
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
import ProtectedRoute from '../imports/ui/ProtectedRoute';

/**
 * @routes
 */
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute path="/admin" component={Admin} />
      <ProtectedRoute path="/orders" component={Orders} />
      <ProtectedRoute path="/clients" component={Clients} />
      <ProtectedRoute path="/products" component={Products} />
    </Switch>
  </BrowserRouter>
);
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/admin', '/orders', '/clients', '/products'];

Tracker.autorun(() => {
  const pathname = '';
  export const isAuthenticated = !!Meteor.userId();
  const noAuth = '';
  console.log(`is Authenticated ${isAuthenticated}`);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
