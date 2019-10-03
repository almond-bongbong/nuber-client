import { useMutation, useQuery } from '@apollo/react-hooks';
import React from 'react';
import { MY_PLACES, USER_PROFILE } from '../../sharedQueries';
import { LOG_USER_OUT } from '../../sharedQueries.local';
import { myPlaces, userProfile } from '../../types/api';
import SettingsPresenter from './SettingsPresenter';

const SettingsContainer: React.FC = () => {
  const [logoutMutation] = useMutation(LOG_USER_OUT);
  const { data: userData, loading: userLoading } = useQuery<userProfile>(USER_PROFILE);
  const { data: placesData, loading: placesLoading } = useQuery<myPlaces>(MY_PLACES);

  console.log('updated, ', placesData);

  return (
    <SettingsPresenter
      userData={userData && userData.GetMyProfile.user}
      userDataLoading={userLoading}
      placesData={placesData && placesData.GetMyPlaces.places}
      placesDataLoading={placesLoading}
      logUserOut={logoutMutation}
    />
  );
};

export default SettingsContainer;