import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loader from '../../components/Loader';

const Container = styled.div`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 40px;
`;

const ExtendedLink = styled(Link)`
  text-decoration: underline;
  margin-bottom: 20px;
  display: block;
`;

interface IProps {
  address: string;
  name: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  onSubmit: () => void;
}

const AddPlacePresenter: React.SFC<IProps> = ({
  onInputChange,
  address,
  name,
  loading,
  onSubmit,
}) => (
  <>
    <Helmet>
      <title>Add Place | Nuber</title>
    </Helmet>
    <Header title={'Add Place'} backTo={'/'} />
    <Container>
      <Form onSubmit={onSubmit}>
        <ExtendedInput
          placeholder={'Name'}
          name={'name'}
          type={'text'}
          onChange={onInputChange}
          value={name}
        />
        <ExtendedInput
          placeholder={'Address'}
          name={'address'}
          type={'text'}
          onChange={onInputChange}
          value={address}
        />
        <ExtendedLink to={'/find-address'}>Pick place from map</ExtendedLink>
        <Button type={'submit'}>
          {loading ? 'Adding place' : 'Add Place'}
        </Button>
      </Form>
      {loading && <Loader />}
    </Container>
  </>
);

export default AddPlacePresenter;
