import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import HomePresenter from './HomePresenter';

const HomeContainer: React.FunctionComponent<RouteComponentProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return <HomePresenter isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
};

export default HomeContainer;
