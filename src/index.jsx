/* @flow */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store from './components/Store';

const rootComponent = document.getElementById('app');

if (rootComponent) {
  ReactDOM.render(
    <Store />,
    rootComponent,
  );
}
