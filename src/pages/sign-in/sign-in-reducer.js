import * as actionsType from './actions/types';

export const signInReducer = (state = {}, action) => {
  switch (action.type) {
    case actionsType.SAVE_USER:
      return {
        ...state,
        ...action.payload,
      };
    case actionsType.CLEAR_USER:
      return {};
    default:
      return state;
  }
};
