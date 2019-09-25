import React from 'react';
import styled from 'styled-components';

const Container = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.grey};
  font-size: 20px;
  width: 100%;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.grey};
    font-weight: 300;
  }
`;

interface IProps {
  value: string;
  onChange: any;
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
}

const Input: React.FunctionComponent<IProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  name = '',
}) => (
  <Container
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;
