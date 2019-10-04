import { useQuery } from '@apollo/react-hooks';
import { GoogleAPI } from 'google-maps-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { USER_PROFILE } from '../../sharedQueries';
import { userProfile } from '../../types/api';
import HomePresenter from './HomePresenter';

interface IProps extends RouteComponentProps {
  google: GoogleAPI;
}

const HomeContainer: React.FC<IProps> = () => {
  const mapRef = useRef<any>();
  const map = useRef<google.maps.Map>();
  const marker = useRef<google.maps.Marker>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { loading } = useQuery<userProfile>(USER_PROFILE);

  const loadMap = useCallback(
    (latitude, longitude) => {
      console.log(latitude, longitude);
      const mapConfig: google.maps.MapOptions = {
        center: {
          lat: latitude,
          lng: longitude,
        },
        disableDefaultUI: true,
        zoom: 15,
      };
      map.current = new google.maps.Map(mapRef.current, mapConfig);

      const markerConfig: google.maps.MarkerOptions = {
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 7,
        },
        position: {
          lat: latitude,
          lng: longitude,
        },
      };
      marker.current = new google.maps.Marker(markerConfig);
      marker.current.setMap(map.current);
    },
    [mapRef],
  );

  const handleGeoSuccess: PositionCallback = useCallback(
    ({ coords }) => {
      loadMap(coords.latitude, coords.longitude);
    },
    [loadMap],
  );

  const handleGeoWatchSuccess: PositionCallback = useCallback((position) => {
    const { coords: { latitude, longitude } } = position;
    const latLng = new google.maps.LatLng(latitude, longitude);

    if (marker.current) {
      marker.current.setPosition(latLng);
    }
    if (map.current) {
      map.current.setCenter(latLng);
    }
  }, []);

  const handleGeoError: PositionErrorCallback = useCallback(e => {
    console.error(e);
  }, []);

  const handleGeoWatchError: PositionErrorCallback = useCallback(e => {
    console.error(e);
  }, []);

  useEffect(() => {
    const watchOptions: PositionOptions = {
      enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    navigator.geolocation.watchPosition(
      handleGeoWatchSuccess,
      handleGeoWatchError,
      watchOptions,
    );
  }, [
    handleGeoSuccess,
    handleGeoError,
    handleGeoWatchSuccess,
    handleGeoWatchError,
  ]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <HomePresenter
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      loading={loading}
      mapRef={mapRef}
    />
  );
};

export default HomeContainer;
