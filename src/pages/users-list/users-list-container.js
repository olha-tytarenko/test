import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { UserList } from './users-list';
import { SIGN_IN_ROUTE } from '../../constants';
import {
  createUser,
  deleteUser,
} from './actions';

const mapStateToProps = state => ({
  authorizedUser: state.user,
  usersList: state.usersList.users,
});

const mapDispatchToProps = {
  signOut: () => push(SIGN_IN_ROUTE),
  createUser,
  deleteUser,
};

export const UserListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
