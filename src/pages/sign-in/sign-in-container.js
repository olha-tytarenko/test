import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { SignIn } from './sign-in';
import { signIn } from './actions';

const mapDispatchToProps = {
  signIn,
};

export const SignInContainer = connect(null, mapDispatchToProps)(SignIn);
