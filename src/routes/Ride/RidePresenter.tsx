import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import {
  getRide_GetRide_ride,
  StatusOption,
  userProfile_GetMyProfile_user,
} from '../../types/api';

const Container = styled.div`
  padding: 40px;
`;

const Title = styled.h4`
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

const Data = styled.span`
  color: ${props => props.theme.blue};
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  max-width: 50px;
  height: 50px;
`;

const Passenger = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  margin: 30px 0;
`;

const ExtendedButton = styled(Button)`
  margin-bottom: 30px;
`;

interface IProps {
  rideData?: getRide_GetRide_ride | null;
  userData?: userProfile_GetMyProfile_user | null;
  loading: boolean;
  updateRide: (status: any) => Promise<void>;
}

const RidePresenter: React.FC<IProps> = ({
  rideData,
  userData,
  updateRide,
}) => {
  const isDriver =
    rideData &&
    rideData.driver &&
    userData &&
    rideData.driver.id === userData.id;
  const isPassenger =
    rideData && userData && rideData.passenger.id === userData.id;

  return (
    <Container>
      {rideData && userData && (
        <React.Fragment>
          <Title>Passenger</Title>
          <Passenger>
            <Img src={rideData.passenger.profilePhoto!} />
            <Data>{rideData.passenger.fullName!}</Data>
          </Passenger>
          {rideData.driver && (
            <React.Fragment>
              <Title>Driver</Title>
              <Passenger>
                <Img src={rideData.driver.profilePhoto!} />
                <Data>{rideData.driver.fullName!}</Data>
              </Passenger>
            </React.Fragment>
          )}
          <Title>From</Title>
          <Data>{rideData.pickUpAddress}</Data>
          <Title>To</Title>
          <Data>{rideData.dropOffAddress}</Data>
          <Title>Price</Title>
          <Data>{rideData.price}</Data>
          <Title>Distance</Title>
          <Data>{rideData.distance}</Data>
          <Title>Duration</Title>
          <Data>{rideData.duration}</Data>
          <Title>Status</Title>
          <Data>{rideData.status}</Data>
          <Buttons>
            {isDriver && rideData.status === 'ACCEPTED' && (
              <ExtendedButton onClick={() => updateRide(StatusOption.ONROUTE)}>
                Picked Up
              </ExtendedButton>
            )}
            {isDriver &&
              rideData.status === 'ONROUTE' && (
                <ExtendedButton
                  onClick={() => updateRide(StatusOption.FINISHED)}
                >
                  Finished
                </ExtendedButton>
              )}
            {(isDriver || isPassenger) && rideData.status === 'ACCEPTED' && (
              <Link to={`/chat/${rideData.chatId}`}>
                <ExtendedButton onClick={null}>Chat</ExtendedButton>
              </Link>
            )}
          </Buttons>
        </React.Fragment>
      )}
    </Container>
  );
};

export default RidePresenter;
