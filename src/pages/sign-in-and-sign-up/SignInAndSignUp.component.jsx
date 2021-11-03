import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

import './sign-in-and-sign-up.styles.scss';

function SignInAndSignUp() {
  return (
    <div className={'sign-in-and-sign-up'}>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
