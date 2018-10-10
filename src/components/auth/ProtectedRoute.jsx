
/* @flow */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getJWT } from '../../actions/token';

type AuthorizationProp = {
  component: any,
  path: string,
  exact: boolean,
};

const ProtectedRoute = (props: AuthorizationProp) => {
  const { path, exact, component: Component } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={routerProps => (
        getJWT()
        ?
        <Component {...routerProps} />
        :
        <Redirect to={{ pathname:'/login', state: { from: routerProps.location } }} />
      )}
    >
    </Route>
  )
};

export default ProtectedRoute;
