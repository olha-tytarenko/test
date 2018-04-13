import { ADD_USER_TO_LIST } from './types';

export const addUserToList = user => ({
  type: ADD_USER_TO_LIST,
  payload: user,
});
