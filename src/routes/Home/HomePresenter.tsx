import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from 'react-sidebar';
import styled from 'styled-components';
import AddressBar from '../../components/AddressBar';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import { formatNumber } from '../../lib/number';
import {
  getDrivers_GetNearbyDrivers_drivers,
  userProfile_GetMyProfile_user,
} from '../../types/api';

const Container = styled.div``;

const MenuButton = styled.button`
  appearance: none;
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  font-weight: 800;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  transform: rotate(90deg);
  z-index: 2;
  background-color: transparent;
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

const RequestButton = styled(ExtendedButton)`
  bottom: 110px;
`;

const Map = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

interface IProps {
  isMenuOpen: boolean;
  loading: boolean;
  toggleMenu: () => void;
  mapRef: React.RefObject<any>;
  toAddress: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressSubmit: () => void;
  onRequestRide: () => void;
  price?: number;
  user?: userProfile_GetMyProfile_user | null;
  drivers?: Array<getDrivers_GetNearbyDrivers_drivers | null> | null;
}

const HomePresenter: React.FunctionComponent<IProps> = ({
  isMenuOpen,
  toggleMenu,
  loading,
  toAddress,
  mapRef,
  onInputChange,
  onAddressSubmit,
  onRequestRide,
  price,
  user,
}) => (
  <Container>
    <Helmet>
      <title>Home | Number</title>
    </Helmet>
    <Sidebar
      sidebar={<Menu />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{
        sidebar: {
          backgroundColor: 'white',
          width: '80%',
          zIndex: '100',
        },
      }}
    >
      {!loading && <MenuButton onClick={toggleMenu}>|||</MenuButton>}
      {user && !user.isDriving && (
        <>
          <AddressBar
            name={'toAddress'}
            onChange={onInputChange}
            value={toAddress}
            onBlur={() => null}
          />
          {price && (
            <RequestButton onClick={onRequestRide} disabled={toAddress === ''}>
              {`Request Ride (₩${formatNumber(price)})`}
            </RequestButton>
          )}
          <ExtendedButton onClick={onAddressSubmit} disabled={toAddress === ''}>
            {price ? 'Change address' : 'Pick Address'}
          </ExtendedButton>
        </>
      )}
      <Map ref={mapRef} />
    </Sidebar>
  </Container>
);

export default HomePresenter;
