import { RSAA } from 'redux-api-middleware';
import { push } from 'react-router-redux';

import { SIGN_IN_URL } from '../../../constants';

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
              console.log(data);
            });
          },
        },
        {
          type: 'FAILURE',
          payload: () => {
            console.log('error');
          },
        },
      ],
    },
  };
  dispatch(action);
};
