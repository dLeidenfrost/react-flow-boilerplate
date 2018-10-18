/* @flow */
import * as React from 'react';
import ReactGA from 'react-ga';
import { TRACKINGID } from '../utils/globals';

const Analytics = (props: {}) => (
  ReactGA.initialize(TRACKINGID, { debug: true })
);

export default Analytics;
