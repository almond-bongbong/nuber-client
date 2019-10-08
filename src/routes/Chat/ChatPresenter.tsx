import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Message from '../../components/Message';
import {
  getChat_GetChat_chat,
  getChat_GetChat_chat_messages,
  userProfile_GetMyProfile_user,
} from '../../types/api';

const Container = styled.div``;

interface IProps {
  chatData?: getChat_GetChat_chat | null;
  userData?: userProfile_GetMyProfile_user | null;
  loading: boolean;
  messageText: string;
  onSubmit: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chatContainerRef?: React.RefObject<HTMLDivElement>;
}

const Chat = styled.div`
  height: 80vh;
  overflow: scroll;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputCont = styled.div`
  padding: 0 20px;
`;

const ChatPresenter: React.FC<IProps> = ({
  loading,
  chatData,
  userData,
  messageText,
  onInputChange,
  onSubmit,
  chatContainerRef,
}) => (
  <Container>
    <Header title={'Chat'} />
    {!loading && chatData && userData && (
      <>
        <Chat ref={chatContainerRef}>
          {chatData.messages &&
            chatData.messages.map(
              (message: getChat_GetChat_chat_messages | null) => {
                if (message) {
                  return (
                    <Message
                      key={message.id}
                      text={message.text}
                      mine={userData.id === message.userId}
                    />
                  );
                }
                return null;
              },
            )}
        </Chat>
        <InputCont>
          <Form onSubmit={onSubmit}>
            <Input
              value={messageText}
              placeholder={'Type your message'}
              onChange={onInputChange}
              name={'message'}
            />
          </Form>
        </InputCont>
      </>
    )}
  </Container>
);

export default ChatPresenter;
