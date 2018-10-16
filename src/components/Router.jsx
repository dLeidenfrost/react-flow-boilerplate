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
import ThemeExample from './test/ThemeExample';
import WithTracker from './ga/WithTracker';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={WithTracker(Login)}/>
      <Route exact path={PATHS.LOGIN} component={WithTracker(Login)}/>
      <Route exact path={PATHS.THEME} component={WithTracker(ThemeExample)}/>
      <ProtectedRoute exact path={PATHS.RECOVER} component={WithTracker(Recover)}/>
      <ProtectedRoute exact path={PATHS.HOME} component={WithTracker(Home)}/>
    </div>
  </BrowserRouter>
);

export default Router;
