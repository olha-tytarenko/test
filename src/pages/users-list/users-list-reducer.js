import * as actionsType from './actions/types';

export const usersListReducer = (state = {}, action) => {
  switch (action.type) {
    case actionsType.SAVE_USERS:
      return {
        users: action.payload,
      };
    case actionsType.REMOVE_USER_FROM_LIST:
      return {
        users: state.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};
