/* @flow */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Home from './inner/Home';
import Login from './auth/Login';
import Recover from './auth/Recover';
import { PATHS } from './utils/globals';
import ProtectedRoute from './auth/ProtectedRoute';
import ThemeExample from './test/ThemeExample';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path={PATHS.LOGIN} component={Login}/>
      <Route exact path={PATHS.THEME} component={ThemeExample}/>
      <ProtectedRoute exact path={PATHS.RECOVER} component={Recover}/>
      <ProtectedRoute exact path={PATHS.HOME} component={Home}/>
    </div>
  </BrowserRouter>
);

export default Router;
