import { GoogleAPI } from 'google-maps-react';
import React, { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { geoCode, reverseGeoCode } from '../../mapHelpers';
import FindAddressPresenter from './FindAddressPresenter';

interface IProps extends RouteComponentProps {
  google: GoogleAPI;
}

const FindAddressContainer: React.FC<IProps> = ({ google, history }) => {
  const mapRef = useRef<any>();
  const map = useRef<google.maps.Map>();
  const [address, setAddress] = useState('');

  const handleDragEnd = useCallback(async () => {
    if (map.current) {
      const mapObj = map.current;
      const latitude = mapObj.getCenter().lat();
      const longitude = mapObj.getCenter().lng();

      await reverseGeocodeAddress(latitude, longitude);
    }
  }, []);

  const loadMap = useCallback(
    (latitude, longitude) => {
      const mapConfig: google.maps.MapOptions = {
        center: {
          lat: latitude,
          lng: longitude,
        },
        disableDefaultUI: true,
        zoom: 15,
      };
      map.current = new google.maps.Map(mapRef.current, mapConfig);
      map.current.addListener('dragend', handleDragEnd);
    },
    [mapRef, google, handleDragEnd],
  );

  const handleGeoSuccess: PositionCallback = useCallback(
    async (position: Position) => {
      const {
        coords: { latitude, longitude },
      } = position;

      loadMap(latitude, longitude);
      await reverseGeocodeAddress(latitude, longitude);
    },
    [loadMap],
  );

  const handleGeoError: PositionErrorCallback = useCallback(e => {
    console.error(e);
  }, []);

  const handleAddress: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressBlur = async () => {
    const location = await geoCode(address);

    if (location) {
      setAddress(location.formatted_address);

      if (map.current) {
        map.current.panTo(new google.maps.LatLng(location.lat, location.lng));
      }
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, [handleGeoSuccess, handleGeoError]);

  const reverseGeocodeAddress = async (latitude: number, longitude: number) => {
    const reversedAddress = await reverseGeoCode(latitude, longitude);
    setAddress(reversedAddress || '');
  };

  const handlePickPlace = () => {
    if (map.current) {
      const lat = map.current.getCenter().lat();
      const lng = map.current.getCenter().lng();
      history.push('/add-place', { lat, lng, address })
    }
  };

  return (
    <FindAddressPresenter
      mapRef={mapRef}
      address={address}
      onAddressChange={handleAddress}
      onAddressBlur={handleAddressBlur}
      onPickPlace={handlePickPlace}
    />
  );
};

export default FindAddressContainer;
