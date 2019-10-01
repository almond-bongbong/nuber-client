import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { USER_PROFILE } from '../../sharedQueries';
import { userProfile } from '../../types/api';
import MenuPresenter from './MenuPresenter';

const MenuContainer = () => {
  const { data, loading } = useQuery<userProfile>(USER_PROFILE);

  return <MenuPresenter data={data} loading={loading} />;
};

export default MenuContainer;
