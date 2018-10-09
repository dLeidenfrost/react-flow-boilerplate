/* @flow */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const rootComponent = document.getElementById('app');

if (rootComponent) {
  ReactDOM.render(
    <App />,
    rootComponent,
  );
}

