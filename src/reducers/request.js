/* @flow */
// Import types
import type { RequestStateType, ActionCreator } from '../utils/types';
// Normal imports
import { SET_USER } from '../actions/user';

const requestReducer = (state: RequestStateType = {}, action: ActionCreator) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default requestReducer;
