import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/global-style';
import { theme } from '../../style/theme';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

const AppContainer = ():React.FunctionComponentElement<any> => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      </ThemeProvider>
    </>
  );
};

export default AppContainer;
