import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import React, { ChangeEventHandler, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { USER_PROFILE } from '../../sharedQueries';
import {
  getChatVariables,
  sendMessage,
  sendMessageVariables,
  userProfile,
} from '../../types/api';
import ChatPresenter from './ChatPresenter';
import { GET_CHAT, SEND_MESSAGE, SUBSCRIBE_TO_MESSAGES } from './ChatQueries';

const ChatContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const { chatId } = useParams();
  const chatContainerEl = useRef<HTMLDivElement>(null);
  const { data: userData } = useQuery<userProfile>(USER_PROFILE);
  const [
    getChatQuery,
    { data: chatData, loading: getChatLoading, subscribeToMore },
  ] = useLazyQuery<any, getChatVariables>(GET_CHAT);
  const [message, setMessage] = useState<string>('');
  const [sendMessageMutation] = useMutation<sendMessage, sendMessageVariables>(
    SEND_MESSAGE,
  );

  useEffect(() => {
    if (subscribeToMore) {
      subscribeToMore({
        document: SUBSCRIBE_TO_MESSAGES,
        updateQuery: (prev, { subscriptionData }) => {
          if (subscriptionData.data) {
            const newObj = _.cloneDeep(prev);
            newObj.GetChat.chat.messages.push(subscriptionData.data.MessageSubscription);
            return newObj;
          }
          return prev;
        },
      });
    }
  }, [subscribeToMore]);

  useEffect(() => {
    if (chatId) {
      getChatQuery({
        variables: { chatId: parseInt(chatId, 10) },
      });
    } else {
      history.replace('/');
    }
  }, [history, chatId, getChatQuery]);

  useLayoutEffect(() => {
    if (chatContainerEl && chatContainerEl.current) {
      chatContainerEl.current.scrollTo(0 , document.body.scrollHeight);
    }
  }, [chatData]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setMessage(e.target.value);
  };

  const submitMessage = async () => {
    try {
      await sendMessageMutation({
        variables: {
          chatId: parseInt(chatId!, 10),
          text: message,
        },
      });
      setMessage('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <ChatPresenter
        chatData={chatData && chatData.GetChat.chat}
        userData={userData && userData.GetMyProfile.user}
        loading={getChatLoading}
        onSubmit={submitMessage}
        onInputChange={handleInputChange}
        chatContainerRef={chatContainerEl}
        messageText={message}
      />
    </div>
  );
};

export default ChatContainer;
