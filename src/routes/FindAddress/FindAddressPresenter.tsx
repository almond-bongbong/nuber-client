import React, { ChangeEvent } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import AddressBar from '../../components/AddressBar';
import Button from '../../components/Button';

const Map = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
`;

const Center = styled.div`
  display: block;
  position: absolute;
  z-index: 20;
  top: 50%;
  left: 50%;
  font-size: 30px;
  transform: translate(-50%, -50%);
`;

const ExtendedButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  height: auto;
  width: 80%;
`;

interface IProps {
  mapRef: React.RefObject<HTMLDivElement>;
  address: string;
  onAddressBlur: () => void;
  onAddressChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPickPlace: () => void;
}

const FindAddressPresenter: React.FC<IProps> = ({
  mapRef,
  address,
  onAddressBlur,
  onAddressChange,
  onPickPlace,
}) => {
  return (
    <div>
      <Helmet>
        <title>Find Address | Nuber</title>
      </Helmet>
      <AddressBar
        value={address}
        onBlur={onAddressBlur}
        name={'address'}
        onChange={onAddressChange}
      />
      <Map ref={mapRef} />
      <ExtendedButton onClick={onPickPlace}>Pick this place</ExtendedButton>
      <Center>
        <span role={'img'} aria-label={'marker'}>
          📍
        </span>
      </Center>
    </div>
  );
};

export default FindAddressPresenter;
