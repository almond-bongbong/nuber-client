import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

const AppContainer = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
  );
};

export default AppContainer;