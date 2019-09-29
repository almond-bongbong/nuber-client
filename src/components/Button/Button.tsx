import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  text-transform: uppercase;
  padding: 15px 0;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
  }
`;

interface IProps {
  type?: 'button' | 'submit';
  children: any;
  onClick?: any;
  disabled?: boolean;
}

const Button: React.FunctionComponent<IProps> = ({
  type = 'button',
  children,
  onClick,
  disabled = false,
}) => (
  <Container type={type} disabled={disabled} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
