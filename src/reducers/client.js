/* @flow */
// Import types
import type { ActionCreator, ClientStateType } from '../utils/types';
// Normal imports

const clientReducer = (state: ClientStateType = {}, action: ActionCreator) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default clientReducer;
