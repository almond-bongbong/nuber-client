import React from 'react';
import styled from 'styled-components';

const PlaceWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  & i {
    font-size: 12px;
  }
`;

const Container = styled.div`
  margin-left: 10px;
`;

const Name = styled.span`
  display: block;
`;

const Icon = styled.span`
  cursor: pointer;
`;

const Address = styled.span`
  color: ${props => props.theme.grey};
  font-size: 14px;
`;

interface IProps {
  name: string;
  address: string;
  fav: boolean;
  onClickFav: () => void;
}

const PlacePresenter: React.FC<IProps> = ({ name, address, fav, onClickFav }) => (
  <PlaceWrapper>
    <Icon onClick={onClickFav}>{fav ? '★' : '✩'}</Icon>
    <Container>
      <Name>{name}</Name>
      <Address>{address}</Address>
    </Container>
  </PlaceWrapper>
);

export default PlacePresenter;
