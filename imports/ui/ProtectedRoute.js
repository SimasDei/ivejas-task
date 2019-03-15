import { isAuthenticated } from '../../client/main';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default (ProtectedRoute = ({ component: Component, ...rest }) => {
  // const isAuthenticated = !!Meteor.userId();
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/'} />
        );
      }}
    />
  );
});
