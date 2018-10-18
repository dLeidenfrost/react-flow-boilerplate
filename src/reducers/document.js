/* @flow */
// Import types
import update from 'immutability-helper';
import type { ActionCreator, DocumentStateType } from '../utils/types';
import { SET_DOCUMENT, UPDATE_DOCUMENT } from '../actions/document';
// Normal imports

const documentReducer = (state: DocumentStateType = {}, action: ActionCreator) => {
  switch (action.type) {
    case SET_DOCUMENT:
    case UPDATE_DOCUMENT: {
      console.log('update doc?');
      return update(state, { [action.data.id]: { $set: action.data.document } })
    }
    default: {
      return state;
    }
  }
};

export default documentReducer;
