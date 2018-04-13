import { RSAA } from 'redux-api-middleware';

import { CREATE_USER_URL } from '../../../constants';
import { getAllUsers } from './get-all-users';

export const createUser = user => (dispatch) => {
  const token = localStorage.getItem('access_token');
  const action = {
    [RSAA]: {
      endpoint: CREATE_USER_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
      types: [
        'CREATE_USER_REQUEST',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {
              console.log(data);
              dispatch(getAllUsers());
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
