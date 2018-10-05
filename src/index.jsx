/* @flow */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './components/Home';

const rootComponent = document.getElementById('app');

if (rootComponent) {
  ReactDOM.render(
    <Home name="Daniel" n={10} />,
    rootComponent,
  );
}

