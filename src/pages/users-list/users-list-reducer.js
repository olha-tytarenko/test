import * as actionsType from './actions/types';

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionsType.SAVE_USERS:
      return {
        users: [...state.users, ...action.payload],
      };
    case actionsType.ADD_USER_TO_LIST:
      return {
        users: [action.payload, ...state.users],
      };
    case actionsType.REMOVE_USER_FROM_LIST:
      return {
        users: state.users.filter(user => user.id !== action.payload),
      };
    case actionsType.CLEAR_USERS_LIST:
      return {
        users: [],
      };
    default:
      return state;
  }
};
