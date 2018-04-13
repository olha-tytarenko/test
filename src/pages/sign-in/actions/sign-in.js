import { RSAA } from 'redux-api-middleware';
import { push } from 'react-router-redux';

import { SIGN_IN_URL, USERS_LIST_ROUTE } from '../../../constants';
import { saveUser } from './';
import { getAllUsers } from '../../users-list/actions';

export const signIn = (email, password) => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: SIGN_IN_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        email,
      }),
      types: [
        'SIGN_IN_REQUEST',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {
              console.log(data.access_token);
              const { user } = data;
              dispatch(saveUser({
                id: user.id,
                email: user.email,
                name: user.name,
              }));

              localStorage.setItem('access_token', data.access_token);
              dispatch(push(USERS_LIST_ROUTE));
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
