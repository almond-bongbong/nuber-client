import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

interface IProps extends RouteComponentProps<any> {

}

const OutHomePresenter:React.FunctionComponent<IProps> = () => (
  <div>
    hello
  </div>
);

export default OutHomePresenter;