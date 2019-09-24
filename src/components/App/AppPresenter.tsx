import React from 'react';

interface IProp {
  isLoggedIn: boolean;
}

const AppPresenter:React.FunctionComponent<IProp> = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn ? 'you are in' : 'you are out'}
  </div>
);

export default AppPresenter;