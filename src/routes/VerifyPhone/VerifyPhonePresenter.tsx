import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Input from '../../components/Input';

const Container = styled.div``;

const ExtendedForm = styled(Form)`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

interface IProps {
  verificationKey: string;
  onChange: any;
  onSubmit: any;
}

const VerifyPhonePresenter: React.FunctionComponent<IProps> = ({
  verificationKey,
  onChange,
  onSubmit,
}) => (
  <Container>
    <Helmet>
      <title>Verify Phone | Number</title>
    </Helmet>
    <Header backTo={'/phone-login'} title={'Verify Phone Number'} />
    <ExtendedForm onSubmit={onSubmit}>
      <ExtendedInput
        value={verificationKey}
        placeholder={'Enter Verification Code'}
        onChange={onChange}
      />
      <Button type="submit">Submit</Button>
    </ExtendedForm>
  </Container>
);

export default VerifyPhonePresenter;
