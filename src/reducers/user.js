/* @flow */
// Import types
import type { UserStateType } from '../utils/types';
// Normal imports
import { SET_USER } from '../actions/user';

type ActionCreator = {
  type: string,
  data: any,
};

const userReducer = (state: UserStateType = {}, action: ActionCreator) => {
  switch (action.type) {
    case SET_USER: {
      return Object.assign({}, action.data);
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
