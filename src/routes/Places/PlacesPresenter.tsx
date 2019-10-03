import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import Place from '../../components/Place';
import { myPlaces_GetMyPlaces_places } from '../../types/api';

const Container = styled.div`
  padding: 0 40px;
`;

const SLink = styled(Link)`
  text-decoration: underline;
`;

interface IProps {
  places?: Array<myPlaces_GetMyPlaces_places | null> | null;
  loading: boolean;
}

const PlacesPresenter: React.SFC<IProps> = ({
  places,
  loading,
}) => (
  <React.Fragment>
    <Helmet>
      <title>Places | Number</title>
    </Helmet>
    <Header title={'Places'} backTo={'/'} />
    <Container>
      {!loading && places && places.length === 0 && (
        <SLink to={'/add-place'}>You have no places</SLink>
      )}
      {!loading &&
        places &&
        places.map(place => (
          <Place
            key={place!.id}
            placeId={place!.id}
            fav={place!.isFav}
            name={place!.name}
            address={place!.address}
          />
        ))}
      <SLink to={'/add-place'}>Add some places!</SLink>
    </Container>
  </React.Fragment>
);

export default PlacesPresenter;
