import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import { GoogleAPI } from 'google-maps-react';
import _ from 'lodash';
import React, { ChangeEventHandler, useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { geoCode, reverseGeoCode } from '../../mapHelpers';
import { USER_PROFILE } from '../../sharedQueries';
import {
  acceptRide,
  acceptRideVariables,
  getDrivers,
  reportMovement,
  reportMovementVariables,
  requestRide,
  requestRideVariables,
  userProfile,
} from '../../types/api';
import HomePresenter from './HomePresenter';
import {
  ACCEPT_RIDE,
  GET_NEARBY_DRIVERS,
  GET_NEARBY_RIDE,
  REPORT_LOCATION,
  REQUEST_RIDE,
  SUBSCRIBE_NEARBY_RIDES,
} from './HomeQueries';

interface IProps extends RouteComponentProps {
  google: GoogleAPI;
}

const HomeContainer: React.FC<IProps> = ({ history }) => {
  const mapRef = useRef<HTMLDivElement>();
  const map = useRef<google.maps.Map>();
  const userMarker = useRef<google.maps.Marker>();
  const toMarker = useRef<google.maps.Marker>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { data: userProfileData, loading } = useQuery<userProfile>(
    USER_PROFILE,
  );
  const [toAddress, setToAddress] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const directions = useRef<google.maps.DirectionsRenderer>();
  const [pendingDirections, setPendingDirections] = useState(false);
  const [distance, setDistance] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [reportMovementMutation] = useMutation<
    reportMovement,
    reportMovementVariables
  >(REPORT_LOCATION);
  const [getDriversQuery, { data: driversData }] = useLazyQuery<getDrivers>(
    GET_NEARBY_DRIVERS,
    { pollInterval: 2000 },
  );
  const driversMarker = useRef<google.maps.Marker[]>([]);
  const [requestRideMutation, { loading: requestRideLoading }] = useMutation<
    requestRide,
    requestRideVariables
  >(REQUEST_RIDE);
  const [
    getNearbyRideQuery,
    { data: nearbyRideData, subscribeToMore: nearbyRideSubscribe },
  ] = useLazyQuery(GET_NEARBY_RIDE);
  const [isDriver, setIsDriver] = useState<boolean>(false);
  const [acceptRideMutation, { loading: acceptRideLoading }] = useMutation<
    acceptRide,
    acceptRideVariables
  >(ACCEPT_RIDE);

  useEffect(() => {
    if (isDriver && nearbyRideData) {
      nearbyRideSubscribe({
        document: SUBSCRIBE_NEARBY_RIDES,
        updateQuery: (prev, { subscriptionData }) => {
          if (subscriptionData.data) {
            const newObj = _.cloneDeep(prev);
            newObj.GetNearByRide.ride = subscriptionData.data.NearByRideSubscription;
            return newObj;
          } else {
            return prev;
          }
        },
      });
    }
  }, [isDriver, nearbyRideData, nearbyRideSubscribe]);

  useEffect(() => {
    if (driversData) {
      const {
        GetNearbyDrivers: { drivers },
      } = driversData;

      if (drivers) {
        drivers.forEach(driver => {
          if (driver && driver.lastLat && driver.lastLng) {
            const existingDriver:
              | google.maps.Marker
              | undefined = driversMarker.current.find(marker => {
              const markerId = marker.get('ID');
              return markerId === driver.id;
            });

            if (existingDriver) {
              existingDriver.setPosition({
                lat: driver.lastLat,
                lng: driver.lastLng,
              });
            } else {
              const markerOptions: google.maps.MarkerOptions = {
                icon: {
                  path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  scale: 5,
                },
                position: {
                  lat: driver!.lastLat,
                  lng: driver!.lastLng,
                },
              };

              const newMarker: google.maps.Marker = new google.maps.Marker(
                markerOptions,
              );

              if (map.current) {
                newMarker.set('ID', driver.id);
                newMarker.setMap(map.current);
                driversMarker.current.push(newMarker);
              }
            }
          }
        });
      }
    }
  }, [driversData]);

  const price: number | undefined = useMemo(() => {
    if (distance) {
      return parseFloat(distance.replace('.', '')) * 120;
    }
  }, [distance]);

  useEffect(() => {
    if (userProfileData) {
      const { user } = userProfileData.GetMyProfile;

      if (user) {
        if (user.isDriving) {
          setIsDriver(true);
          getNearbyRideQuery();
        } else {
          getDriversQuery();
        }
      }
    }
  }, [userProfileData, getDriversQuery, getNearbyRideQuery, nearbyRideSubscribe]);

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
    async ({ coords }) => {
      loadMap(coords.latitude, coords.longitude);
      const address = await reverseGeoCode(coords.latitude, coords.longitude);
      if (address) {
        setFromAddress(address);
      }
    },
    [loadMap],
  );

  const handleGeoWatchSuccess: PositionCallback = useCallback(
    position => {
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
    },
    [reportMovementMutation],
  );

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

  const submitRequestRide = async () => {
    const fromLat = userMarker.current!.getPosition()!.lat();
    const fromLng = userMarker.current!.getPosition()!.lng();
    const toLat = toMarker.current!.getPosition()!.lat();
    const toLng = toMarker.current!.getPosition()!.lng();

    try {
      if (distance && duration && price) {
        const response = await requestRideMutation({
          variables: {
            distance,
            dropOffAddress: toAddress,
            dropOffLat: toLat,
            dropOffLng: toLng,
            duration,
            pickUpAddress: fromAddress,
            pickUpLat: fromLat,
            pickUpLng: fromLng,
            price,
          },
        });

        if (response.data) {
          const { RequestRide } = response.data;
          if (RequestRide.ok && RequestRide.ride) {
            toast.success('Drive requested, finding a driver');
            history.push(`/ride/${RequestRide.ride.id}`);
          } else {
            toast.error(RequestRide.error);
          }
        }
      } else {
        toast.warn('Destination is invalid');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAcceptRide = async (rideId: number) => {
    try {
      const response = await acceptRideMutation({
        variables: {
          rideId,
        },
      });
      if (response.data) {
        const { UpdateRideStatus } = response.data;

        if (UpdateRideStatus.ok) {
          history.push(`/ride/${rideId}`);
        }
      }
    } catch (e) {
      console.error(e);
    }
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
        onRequestRide={submitRequestRide}
        price={price}
        isDriver={isDriver}
        nearbyRide={nearbyRideData && nearbyRideData.GetNearByRide.ride}
        onAcceptRide={handleAcceptRide}
      />
      {(pendingDirections || requestRideLoading || acceptRideLoading) && (
        <Loader />
      )}
    </>
  );
};

export default HomeContainer;
