import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';

const PhoneLoginContainer: React.FunctionComponent<
  RouteComponentProps<any>
> = () => {
  const [countryCode, setCountryCode] = useState<string>('+82');
  const [phoneNumber, setPhoneNumber] = useState<string>('12345');

  const onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
    const { target: { name, value } } = event;

    if (name === 'countryCode') { setCountryCode(value); }
    if (name === 'phoneNumber') { setPhoneNumber(value); }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    console.log(countryCode, phoneNumber);
  };

  return (
    <PhoneLoginPresenter
      countryCode={countryCode}
      phoneNumber={phoneNumber}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default PhoneLoginContainer;
