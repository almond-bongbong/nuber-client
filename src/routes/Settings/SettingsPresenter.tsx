import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import Place from '../../components/Place';
import {
  myPlaces_GetMyPlaces_places,
  userProfile_GetMyProfile_user,
} from '../../types/api';

const Container = styled.div`
  padding: 0 40px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const GridLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const Keys = styled.div``;

const Key = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const FakeLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const SLink = styled(Link)`
  display: block;
  text-decoration: underline;
  margin: 20px 0;
`;

interface IProps {
  logUserOut: () => void;
  userData?: userProfile_GetMyProfile_user | null;
  placesData?: Array<myPlaces_GetMyPlaces_places | null> | null;
  userDataLoading: boolean;
  placesDataLoading: boolean;
}

const SettingsPresenter: React.FC<IProps> = ({
  logUserOut,
  userData,
  placesData,
  userDataLoading,
  placesDataLoading,
}) => (
  <React.Fragment>
    <Helmet>
      <title>Settings | Nuber</title>
    </Helmet>
    <Header title={'Account Settings'} backTo={'/'} />
    <Container>
      <GridLink to={'/edit-account'}>
        {!userDataLoading &&
          userData &&
          userData.profilePhoto &&
          userData.email &&
          userData.fullName && (
            <>
              <Image src={userData.profilePhoto} />
              <Keys>
                <Key>{userData.fullName}</Key>
                <Key>{userData.email}</Key>
              </Keys>
            </>
          )}
      </GridLink>
      {!placesDataLoading &&
        placesData &&
        placesData.map((place: myPlaces_GetMyPlaces_places | null) => (
          <Place
            key={place!.id}
            placeId={place!.id}
            fav={place!.isFav}
            name={place!.name}
            address={place!.address}
          />
        ))}
      <SLink to={'/places'}>Go to Places</SLink>
      <FakeLink onClick={logUserOut as any}>Log Out</FakeLink>
    </Container>
  </React.Fragment>
);

export default SettingsPresenter;
