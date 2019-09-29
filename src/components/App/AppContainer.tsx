import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/global-style';
import { theme } from '../../style/theme';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries.local';

const AppContainer = (): React.FunctionComponentElement<any> => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      </ThemeProvider>
      <ToastContainer draggable={true} position="bottom-center" />
    </>
  );
};

export default AppContainer;
