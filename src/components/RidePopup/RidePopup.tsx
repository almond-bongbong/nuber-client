import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface IProps {
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  duration: string;
  passengerName: string;
  passengerPhoto?: string | null;
  acceptRideFn: any;
  id: number;
}

const Container = styled.div`
  background-color: white;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 60%;
  z-index: 9;
  padding: 20px;
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
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
`;

const Passenger = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RidePopUp: React.FC<IProps> = ({
  pickUpAddress,
  dropOffAddress,
  price,
  distance,
  duration,
  passengerName,
  passengerPhoto,
  acceptRideFn,
  id,
}) => (
  <Container>
    <Title>Pick Up Address</Title>
    <Data>{pickUpAddress}</Data>
    <Title>Drop Off Address</Title>
    <Data>{dropOffAddress}</Data>
    <Title>Price</Title>
    <Data>{price}</Data>
    <Title>Distance</Title>
    <Data>{distance}</Data>
    <Title>Duration</Title>
    <Data>{duration}</Data>
    <Title>Passenger:</Title>
    <Passenger>
      {passengerPhoto && <Img src={passengerPhoto} />}
      <Data>{passengerName}</Data>
    </Passenger>
    <Button onClick={() => acceptRideFn(id)}>Accept Ride</Button>
  </Container>
);

export default RidePopUp;
