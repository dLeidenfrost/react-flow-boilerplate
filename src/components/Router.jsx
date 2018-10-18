/* @flow */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Home from './inner/home/Home';
import Login from './auth/Login';
import Recover from './auth/Recover';
import { PATHS } from './utils/globals';
import ProtectedRoute from './auth/ProtectedRoute';
import RequestsHome from './inner/requests/RequestsHome';
import ThemeExample from './test/ThemeExample';
import WithTracker from './ga/WithTracker';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path={PATHS.LOGIN} component={Login}/>
      <Route exact path={PATHS.THEME} component={ThemeExample}/>
      <ProtectedRoute exact path={PATHS.RECOVER} component={Recover}/>
      <ProtectedRoute exact path={PATHS.HOME} component={Home}/>
      <ProtectedRoute exact path={PATHS.REQUESTS} component={RequestsHome} />
    </div>
  </BrowserRouter>
);

export default Router;
