import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { LOG_USER_IN } from '../../sharedQueries.local';
import { verifyPhone, verifyPhoneVariables } from '../../types/api';
import VerifyPhonePresenter from './VerifyPhonePresenter';
import { VERIFY_PHONE } from './VerifyPhoneQueries';

const VerifyPhoneContainer: React.FunctionComponent<RouteComponentProps> = ({
  location,
  history,
}) => {
  if (!location.state || !location.state.phoneNumber) {
    history.replace('/');
  }

  const [key, setKey] = useState<string>('');
  const [verifyMutation, { loading }] = useMutation<
    verifyPhone,
    verifyPhoneVariables
  >(VERIFY_PHONE, {
    variables: { key, phoneNumber: location.state.phoneNumber },
  });
  const [loginMutation] = useMutation(LOG_USER_IN);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setKey(target.value);
  };

  const handleSubmit: React.FormEventHandler = async event => {
    try {
      const { data } = await verifyMutation();

      if (data && data.CompletePhoneVerification) {
        const { CompletePhoneVerification } = data;

        if (CompletePhoneVerification.ok) {
          if (CompletePhoneVerification.token) {
            toast.success("You're verified, login now");
            await loginMutation({
              variables: { token: CompletePhoneVerification.token },
            });
            history.replace('/');
          } else {
            console.log('profile 화면으로 이동하여 계속 진행');
          }
        } else {
          toast.error(CompletePhoneVerification.error);
        }
      }
      console.log(data);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div>
      <VerifyPhonePresenter
        verificationKey={key}
        onChange={handleInput}
        onSubmit={handleSubmit}
      />
      {loading && <Loader />}
    </div>
  );
};

export default VerifyPhoneContainer;
