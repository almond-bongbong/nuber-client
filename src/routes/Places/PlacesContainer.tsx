import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { MY_PLACES } from '../../sharedQueries';
import { myPlaces } from '../../types/api';
import PlacesPresenter from './PlacesPresenter';

const PlacesContainer = () => {
  const { data, loading } = useQuery<myPlaces>(MY_PLACES);

  return (
    <PlacesPresenter
      places={data && data.GetMyPlaces.places}
      loading={loading}
    />
  );
};

export default PlacesContainer;
