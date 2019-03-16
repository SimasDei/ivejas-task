import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/**
 * @components
 */
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import Admin from '../ui/Admin';
import Clients from '../ui/Clients';
import Orders from '../ui/Orders';
import Products from '../ui/Products';

/**
 * @routes
 */
export const routes = (
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
