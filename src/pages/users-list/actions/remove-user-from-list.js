import { REMOVE_USER_FROM_LIST } from './types';

export const addUserToList = id => ({
  type: REMOVE_USER_FROM_LIST,
  payload: id,
});
