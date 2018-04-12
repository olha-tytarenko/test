import { SAVE_USERS } from './types';

export const addUserToList = users => ({
  type: SAVE_USERS,
  payload: users,
});
