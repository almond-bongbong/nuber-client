import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import PhotoInput from '../../components/PhotoInput';

const Container = styled.div``;
const ExtendedForm = styled(Form)`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 30px;
`;

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto?: string;
  onSubmit: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  uploading: boolean;
  onPhotoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditAccountPresenter: React.FunctionComponent<IProps> = ({
  firstName,
  lastName,
  email,
  onInputChange,
  onSubmit,
  loading,
  profilePhoto,
  uploading,
  onPhotoChange,
}) => {
  return (
    <Container>
      <Helmet>
        <title>Edit Account | Number</title>
      </Helmet>
      <Header title={'Edit Account'} backTo={'/'} />
      <ExtendedForm onSubmit={onSubmit}>
        <PhotoInput
          uploading={uploading}
          fileUrl={profilePhoto || ''}
          onChange={onPhotoChange}
        />
        <ExtendedInput
          type={'text'}
          name={'firstName'}
          value={firstName}
          onChange={onInputChange}
          placeholder={'First name'}
        />
        <ExtendedInput
          type={'text'}
          name={'lastName'}
          value={lastName}
          onChange={onInputChange}
          placeholder={'Last name'}
        />
        <ExtendedInput
          type={'email'}
          name={'email'}
          value={email}
          onChange={onInputChange}
          placeholder={'Email'}
        />
        <Button type={'submit'}>Update</Button>
      </ExtendedForm>
      {loading && <Loader />}
    </Container>
  );
};

export default EditAccountPresenter;
