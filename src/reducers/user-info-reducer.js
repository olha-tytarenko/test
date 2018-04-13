import { SAVE_USER } from '../pages/sign-in/actions/types';

export const userInfoReducer = (state = {}, action) => {
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
