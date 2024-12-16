import { useEffect, useState } from 'react';

import { useDemoSocketConnection } from './use-demo-connection';
import { useDemoBroadcast } from './use-demo-broadcast';

import { generateUsername } from './generator-user-name';

type MessageType = MessageEvent<unknown> | { username: string; message: string };

export const useDemoSocket = () => {
  // mock server URL
  const [socketUrl] = useState<string>('ws://localhost:8080');
  const [message, setMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('TEST_USER');
  const [chatRoomId, setChatRoomId] = useState<string>('1');

  const { sendMessage, messageHistory, connectionStatus, lastMessage, readyState } =
    useDemoSocketConnection({ socketUrl });

  const { sendBroadcastMessage } = useDemoBroadcast({
    channelName: `chat_channel${chatRoomId}`,
    onMessage: data => {
      sendMessage(data);
    },
  });

  const handleClickSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessage: MessageType = {
      username,
      message,
    };

    sendBroadcastMessage(JSON.stringify(newMessage));

    setMessage('');
  };

  const handleChatRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomId(e.target.value);
  };

  const handleRoomIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomId(e.target.value);
  };

  useEffect(() => {
    setUsername(generateUsername());
  }, []);

  return {
    messageHistory,
    message,
    username,
    setMessage,
    setUsername,
    handleClickSendMessage,
    connectionStatus,
    lastMessage,
    readyState,
    chatRoomId,
    handleChatRoomChange,
    handleRoomIdChange,
  };
};
