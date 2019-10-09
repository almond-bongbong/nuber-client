import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import BackArrow from '../../components/BackArrow';
import Form from '../../components/Form';
import Input from '../../components/Input';

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

interface IProps {
  email: string;
  password: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const EmailLoginPresenter: React.FunctionComponent<IProps> = ({
  email,
  password,
  onInputChange,
  onSubmit,
}) => (
  <Container>
    <Helmet>
      <title>Phone Login | Number</title>
    </Helmet>
    <BackArrowExtended backTo={'/'} />
    <Title>Enter your email</Title>
    <Form onSubmit={onSubmit}>
      <ExtendedInput
        placeholder={'your@email.com'}
        type={'email'}
        name={'email'}
        value={email}
        onChange={onInputChange}
      />
      <ExtendedInput
        placeholder={'password'}
        type={'password'}
        name={'password'}
        value={password}
        onChange={onInputChange}
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={'white'}
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </Button>
    </Form>
  </Container>
);

export default EmailLoginPresenter;
