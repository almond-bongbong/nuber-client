import React from 'react';
import { MutationFunction } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { toggleDriving, userProfile } from '../../types/api';

const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  background-color: black;
  height: 20%;
  margin-bottom: 30px;
  padding: 0 15px;
  color: white;
`;

const SLink = styled(Link)`
  font-size: 22px;
  display: block;
  margin-left: 15px;
  margin-bottom: 25px;
  font-weight: 400;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  background-color: grey;
  border-radius: 40px;
  overflow: hidden;
`;

const Name = styled.h2`
  font-size: 22px;
  color: white;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rating = styled.h5`
  font-size: 18px;
  color: white;
`;

const Text = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  height: 100%;
  align-items: center;
`;

interface IToggleProps {
  readonly isDriving: boolean;
}

const ToggleDriving = styled.button<IToggleProps>`
  -webkit-appearance: none;
  background-color: ${props =>
    props.isDriving ? props.theme.yellow : props.theme.green};
  width: 100%;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 15px 0;
  cursor: pointer;
`;

interface IProps {
  data: userProfile | undefined;
  loading: boolean;
  toggleDrivingFn: MutationFunction<toggleDriving>;
}

const MenuPresenter: React.FunctionComponent<IProps> = ({
  data,
  loading,
  toggleDrivingFn,
}) => {
  const { GetMyProfile } = data || {};
  const { user } = GetMyProfile || {};

  const handleToggleDriving = async () => {
    await toggleDrivingFn();
  };

  return (
    <Container>
      {!loading && user && (
        <>
          <Header>
            <Grid>
              <Link to={'/edit-account'}>
                <Image
                  src={
                    user.profilePhoto ||
                    'https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg'
                  }
                />
              </Link>
              <Text>
                <Name>{user.fullName}</Name>
                <Rating>4.5</Rating>
              </Text>
            </Grid>
          </Header>
          <SLink to="/trips">Your Trips</SLink>
          <SLink to="/settings">Settings</SLink>
          <ToggleDriving isDriving={user.isDriving} onClick={handleToggleDriving}>
            {user.isDriving ? 'Stop driving' : 'Start driving'}
          </ToggleDriving>
        </>
      )}
    </Container>
  );
};

export default MenuPresenter;
