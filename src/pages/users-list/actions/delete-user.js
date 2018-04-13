import { RSAA } from 'redux-api-middleware';

import { DELETE_USER_URL } from '../../../constants';
import { removeUserFromList } from './remove-user-from-list';

export const deleteUser = id => (dispatch) => {
  const token = localStorage.getItem('access_token');
  const action = {
    [RSAA]: {
      endpoint: DELETE_USER_URL(id),
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      types: [
        'DELETE_USER_REQUEST',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then(() => {
              dispatch(removeUserFromList(id));
            });
          },
        },
        {
          type: 'FAILURE',
          payload: () => {
            // simulate logging errors
            console.log('error');
          },
        },
      ],
    },
  };

  dispatch(action);
};