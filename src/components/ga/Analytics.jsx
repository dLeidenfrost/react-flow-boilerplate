/* @flow */
import * as React from 'react';
import ReactGA from 'react-ga';

const Analytics = (props: {}) => (
  ReactGA.initialize('UA-127488522-1', { debug: true })
);

export default Analytics;
