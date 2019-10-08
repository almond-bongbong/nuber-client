import { useMutation, useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { USER_PROFILE } from '../../sharedQueries';
import {
  getRide,
  getRideVariables,
  StatusOption,
  updateRide,
  updateRideVariables,
  userProfile,
} from '../../types/api';
import RidePresenter from './RidePresenter';
import { GET_RIDE, RIDE_SUBSCRIPTION, UPDATE_RIDE_STATUS } from './RideQueries';

const RideContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const { rideId } = useParams();
  const { data: userData } = useQuery<userProfile>(USER_PROFILE);
  const { data: rideData, loading, subscribeToMore } = useQuery<
    any,
    getRideVariables
  >(GET_RIDE, {
    skip: !rideId,
    variables: {
      rideId: parseInt(rideId!, 10),
    },
  });
  const [rideUpdateMutation] = useMutation<updateRide, updateRideVariables>(
    UPDATE_RIDE_STATUS,
  );

  useEffect(() => {
    if (!rideId) {
      history.push('/');
    }
  }, [rideId, history]);

  useEffect(() => {
    if (rideData) {
      subscribeToMore({
        document: RIDE_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (subscriptionData.data) {
            const newObj: getRide = _.cloneDeep(prev);
            newObj.GetRide.ride = subscriptionData.data.RideStatusSubscription;
            return newObj;
          } else {
            return prev;
          }
        },
      });
    }
  }, [rideData, subscribeToMore]);

  useEffect(() => {
    console.log(rideData);
    if (rideData && rideData.GetRide.ride.status === 'FINISHED') {
      window.location.href = '/';
    }
  }, [rideData, history]);

  const handleUpdateRide = async (status: StatusOption) => {
    if (rideId) {
      const intRideId = parseInt(rideId, 10);
      await rideUpdateMutation({
        refetchQueries: [
          {
            query: GET_RIDE,
            variables: {
              rideId: intRideId,
            },
          },
        ],
        variables: {
          rideId: intRideId,
          status,
        },
      });
    }
  };

  return (
    <>
      <RidePresenter
        userData={userData && userData.GetMyProfile.user}
        rideData={rideData && rideData.GetRide.ride}
        updateRide={handleUpdateRide}
        loading={loading}
      />
      {loading && <Loader />}
    </>
  );
};

export default RideContainer;
