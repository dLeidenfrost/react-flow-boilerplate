import { combineReducers } from 'redux';
import user from './user';
import request from './request';
import client from './client';
import documents from './document';

export default combineReducers({
  user,
  request,
  client,
  documents,
});
