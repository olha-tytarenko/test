import { RSAA } from 'redux-api-middleware';

import { USERS_LIST_URL } from '../../../constants';
import { saveUsers } from './save-users';

export const getAllUsers = (page = 1, pageSize = 10) => (dispatch) => {
  const token = localStorage.getItem('access_token');
  const action = {
    [RSAA]: {
      endpoint: USERS_LIST_URL(page, pageSize),
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
              console.log(page);
              dispatch(saveUsers(data.data));
              if (data.pagination.pageCount !== page) {
                dispatch(getAllUsers(page + 1, pageSize));
              }
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
