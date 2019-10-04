import { useMutation, useQuery } from '@apollo/react-hooks';
import { GoogleAPI } from 'google-maps-react';
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { geoCode } from '../../mapHelpers';
import { USER_PROFILE } from '../../sharedQueries';
import {
  reportMovement,
  reportMovementVariables,
  userProfile,
} from '../../types/api';
import HomePresenter from './HomePresenter';
import { REPORT_LOCATION } from './HomeQueries';

interface IProps extends RouteComponentProps {
  google: GoogleAPI;
}

const HomeContainer: React.FC<IProps> = () => {
  const mapRef = useRef<HTMLDivElement>();
  const map = useRef<google.maps.Map>();
  const userMarker = useRef<google.maps.Marker>();
  const toMarker = useRef<google.maps.Marker>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { loading } = useQuery<userProfile>(USER_PROFILE);
  const [toAddress, setToAddress] = useState('aia타워');
  const directions = useRef<google.maps.DirectionsRenderer>();
  const [pendingDirections, setPendingDirections] = useState(false);
  const [distance, setDistance] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [reportMovementMutation] = useMutation<
    reportMovement,
    reportMovementVariables
  >(REPORT_LOCATION);

  const price: number | undefined = useMemo(() => {
    if (distance) {
      return parseFloat(distance.replace('.', '')) * 120;
    }
  }, [distance]);

  const loadMap = useCallback(
    (latitude, longitude) => {
      console.log('load map');
      const mapConfig: google.maps.MapOptions = {
        center: {
          lat: latitude,
          lng: longitude,
        },
        disableDefaultUI: true,
        zoom: 15,
      };
      map.current = new google.maps.Map(mapRef.current!, mapConfig);

      const userMarkerConfig: google.maps.MarkerOptions = {
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 7,
        },
        position: {
          lat: latitude,
          lng: longitude,
        },
      };
      userMarker.current = new google.maps.Marker(userMarkerConfig);
      userMarker.current.setMap(map.current);
    },
    [mapRef],
  );

  const handleGeoSuccess: PositionCallback = useCallback(
    ({ coords }) => {
      loadMap(coords.latitude, coords.longitude);
    },
    [loadMap],
  );

  const handleGeoWatchSuccess: PositionCallback = useCallback(position => {
    const {
      coords: { latitude, longitude },
    } = position;
    const latLng = new google.maps.LatLng(latitude, longitude);

    if (userMarker.current) {
      userMarker.current.setPosition(latLng);
    }
    if (map.current) {
      map.current.panTo(latLng);
    }

    reportMovementMutation({
      variables: {
        lat: latitude,
        lng: longitude,
      },
    });
  }, [reportMovementMutation]);

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

  const handleInputAddress: ChangeEventHandler<HTMLInputElement> = e => {
    setToAddress(e.target.value);
  };

  const submitAddress = async () => {
    const location = await geoCode(toAddress);

    if (location) {
      setToAddress(location.formatted_address);

      if (toMarker.current) {
        toMarker.current.setMap(null);
      }

      const toMarkerConfig: google.maps.MarkerOptions = {
        position: {
          lat: location.lat,
          lng: location.lng,
        },
      };
      toMarker.current = new google.maps.Marker(toMarkerConfig);
      toMarker.current.setMap(map.current!);

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(
        new google.maps.LatLng(
          userMarker.current!.getPosition()!.lat(),
          userMarker.current!.getPosition()!.lng(),
        ),
      );
      bounds.extend(new google.maps.LatLng(location.lat, location.lng));
      map.current!.fitBounds(bounds);

      createPath();
    }
  };

  const createPath = () => {
    const fromLatLng = new google.maps.LatLng(
      userMarker.current!.getPosition()!.lat(),
      userMarker.current!.getPosition()!.lng(),
    );
    const toLatLng = new google.maps.LatLng(
      toMarker.current!.getPosition()!.lat(),
      toMarker.current!.getPosition()!.lng(),
    );

    if (directions.current) {
      directions.current.setMap(null);
    }

    const renderOptions: google.maps.DirectionsRendererOptions = {
      polylineOptions: {
        strokeColor: '#000',
      },
      suppressMarkers: true,
    };

    directions.current = new google.maps.DirectionsRenderer(renderOptions);

    const directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
    const directionsOptions: google.maps.DirectionsRequest = {
      destination: toLatLng,
      origin: fromLatLng,
      travelMode: google.maps.TravelMode.TRANSIT,
    };

    setPendingDirections(true);
    directionsService.route(directionsOptions, (result, status) => {
      setPendingDirections(false);
      if (status === google.maps.DirectionsStatus.OK) {
        const { routes } = result;
        const {
          distance: { text: distanceText },
          duration: { text: durationText },
        } = routes[0].legs[0];

        setDistance(distanceText);
        setDuration(durationText);

        directions.current!.setDirections(result);
        directions.current!.setMap(map.current!);
      } else {
        toast.error('There is no route there, you have to swim');
      }
    });
  };

  return (
    <>
      <HomePresenter
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        loading={loading}
        mapRef={mapRef}
        toAddress={toAddress}
        onInputChange={handleInputAddress}
        onAddressSubmit={submitAddress}
        price={price}
      />
      {pendingDirections && <Loader />}
    </>
  );
};

export default HomeContainer;
