import { SAVE_USER } from './types';

export const saveUser = userInfo => ({
  type: SAVE_USER,
  payload: userInfo,
});
