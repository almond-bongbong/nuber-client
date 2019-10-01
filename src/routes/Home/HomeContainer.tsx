import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { USER_PROFILE } from '../../sharedQueries';
import { userProfile } from '../../types/api';
import HomePresenter from './HomePresenter';

const HomeContainer: React.FunctionComponent<RouteComponentProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { loading } = useQuery<userProfile>(USER_PROFILE);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <HomePresenter
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      loading={loading}
    />
  );
};

export default HomeContainer;
