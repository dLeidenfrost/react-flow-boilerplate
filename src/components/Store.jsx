/* @flow */
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import root from '../reducers/root';
import { setUser, updateUser } from '../actions/user';
import App from './App';

type ProviderProps = {};

/*
  * Redux extension to watch behavior under chrome inspector
  * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
*/
const store = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Store = (props: ProviderProps) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Store;
