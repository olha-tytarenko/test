import { RSAA } from 'redux-api-middleware';

import { USERS_LIST_URL } from '../../../constants';
import { saveUsers } from './save-users';

export const getAllUsers = () => (dispatch) => {
  const token = localStorage.getItem('access_token');
  const action = {
    [RSAA]: {
      endpoint: USERS_LIST_URL,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      types: [
        'GET_USERS_REQUEST',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {
              console.log(data);
              dispatch(saveUsers(data.data));
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
