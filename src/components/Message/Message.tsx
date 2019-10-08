import React from 'react';
import styled from 'styled-components';

interface IContainerProps {
  mine: boolean;
}

const Container = styled.div<IContainerProps>`
  background-color: ${props =>
    props.mine ? props.theme.blue : props.theme.grey};
  color: white;
  padding: 10px 20px;
  align-self: ${props => (props.mine ? 'flex-end' : 'flex-start')};
  border-radius: ${props =>
    props.mine ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  margin-bottom: 10px;
`;

interface IProps {
  text: string;
  mine: boolean;
}

const Message: React.FC<IProps> = ({ text, mine }) => (
  <Container mine={mine}>{text}</Container>
);

export default Message;
