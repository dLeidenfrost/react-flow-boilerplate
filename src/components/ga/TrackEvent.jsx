/* @flow */
import * as React from 'react';
import ReactGA from 'react-ga';
import type { AnalyticsEventType } from '../../utils/types';

const TrackEvent = (event: AnalyticsEventType) => {

  ReactGA.event(event);

  return;
};

export default TrackEvent;