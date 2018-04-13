import { RSAA } from 'redux-api-middleware';

import { CREATE_USER_URL } from '../../../constants';
import { addUserToList } from './add-user-to-list';

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
              const newUser = {
                email: data.email,
                name: data.name,
                id: data.id,
              };
              dispatch(addUserToList(newUser));
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
