import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEventHandler, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { emailSignIn, emailSignInVariables } from '../../types/api';
import EmailLoginPresenter from './EmailLoginPresenter';
import { EMAIL_SIGN_IN } from './EmailLoginQueries';

const EmailLoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSignInMutation, { loading }] = useMutation<
    emailSignIn,
    emailSignInVariables
  >(EMAIL_SIGN_IN);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const submitLogin = async () => {
    console.log('submit');
    try {
      const result = await emailSignInMutation({
        variables: {
          email,
          password,
        },
      });
      console.log(result);

      if (result.data) {
        const { EmailSignIn } = result.data;

        if (EmailSignIn.ok) {

        } else {
          toast.error(EmailSignIn.error);
        }
      }
    } catch (e) {
      console.error(e);
      toast.error('문제가 발생했습니다.');
    }
  };

  return (
    <>
      <EmailLoginPresenter
        email={email}
        password={password}
        onInputChange={handleInputChange}
        onSubmit={submitLogin}
      />
      {loading && <Loader />}
    </>
  );
};

export default EmailLoginContainer;
