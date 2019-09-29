import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import {
  startPhoneVerification,
  startPhoneVerificationVariables,
} from '../../types/api';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { PHONE_SIGN_IN } from './PhoneQueries';

const PhoneLoginContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [countryCode, setCountryCode] = useState<string>('+82');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;
  const [mutation, { loading }] = useMutation<
    startPhoneVerification,
    startPhoneVerificationVariables
  >(PHONE_SIGN_IN, {
    variables: { phoneNumber: fullPhoneNumber },
  });

  const onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value },
    } = event;

    if (name === 'countryCode') {
      setCountryCode(value);
    }
    if (name === 'phoneNumber') {
      setPhoneNumber(value);
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    const isValid = /^\+[1-9]{1}[0-9]{7,12}$/.test(
      fullPhoneNumber,
    );

    if (isValid) {
      const { data } = await mutation();

      if (data) {
        const { StartPhoneVerification } = data;

        if (StartPhoneVerification.ok) {
          toast.success('SMS Sent!');
          history.push({
            pathname: '/verify-phone',
            state: { phoneNumber: fullPhoneNumber },
          });
        } else {
          toast.error(StartPhoneVerification.error);
        }
      }
    } else {
      toast.error('Please write a valid phone number');
    }
  };

  return (
    <>
      <PhoneLoginPresenter
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {loading && <Loader />}
    </>
  );
};

export default PhoneLoginContainer;
