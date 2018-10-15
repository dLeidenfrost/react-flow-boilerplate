/* @flow */
import { ROLES, AREAS } from '../components/utils/globals';
import type { UserStateType } from '../utils/types';

export const SET_USER: string = 'SET_USER';
export const UPDATE_USER: string = 'UPDATE_USER';

export const setUser = (): UserStateType => ({
  type: SET_USER,
  data: {
    id: 1,
    promotor: {
      id: 1,
      firstname: 'Daniel',
      lastname: 'Martinez',
      office: 'Mexico',
    },
    role: ROLES.DIRECTOR,
    area: AREAS.MKT,
  }
});

export const updateUser = (): UserStateType => ({
  type: UPDATE_USER,
  data: {
    id: 1,
    promotor: {
      id: 1,
      firstname: 'Daniel',
      lastname: 'Martinez',
      office: 'Mexico',
    },
    role: ROLES.SPECIALIST,
    area: AREAS.MKT,
  }
});
