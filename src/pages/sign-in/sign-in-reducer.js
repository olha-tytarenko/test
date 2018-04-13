import { SAVE_USER } from './actions/types';

export const signInReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
