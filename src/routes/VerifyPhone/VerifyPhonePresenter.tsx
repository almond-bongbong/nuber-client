import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';

const Container = styled.div``;

const Form = styled.form`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

const VerifyPhonePresenter = () => (
  <Container>
    <Helmet>
      <title>Verify Phone | Number</title>
    </Helmet>
    <Header backTo={'/phone-login'} title={'Verify Phone Number'} />
    <Form>
      <ExtendedInput
        value={''}
        placeholder={'Enter Verification Code'}
        onChange={null}
      />
      <Button value={'Submit'} onClick={null} />
    </Form>
  </Container>
);

export default VerifyPhonePresenter;
