import { useDemoSocket } from './model';
import { Button, Input, Label } from '~shared/shadcn/components/ui';

import { ReadyState } from 'react-use-websocket';

import ConnectionStatus from './connection-status';
import DemoSocketRoom from './demo-scoket-room';

function DemoSocket() {
  const {
    message,
    setMessage,
    username,
    setUsername,
    handleClickSendMessage,
    connectionStatus,
    readyState,
    handleChatRoomChange,
    chatRoomId,
    lastMessage,
    messageHistory,
  } = useDemoSocket();

  return (
    <li className="p-5 ">
      <form onSubmit={handleClickSendMessage}>
        <div className="flex gap-2 justify-center items-center outline outline-1 p-1 rounded">
          <span className="">The WebSocket is currently</span>
          <ConnectionStatus connectionStatus={connectionStatus} />
        </div>

        <div>
          <Label>Chat Room</Label>
          <Input id="chatRoomId" value={chatRoomId} onChange={handleChatRoomChange} />
        </div>

        <div>
          <Label htmlFor="username">username</Label>
          <Input id="username" value={username} onChange={e => setUsername(e.target.value)} />
          <Label htmlFor="message">message</Label>
          <Input value={message} onChange={e => setMessage(e.target.value)} />
          <Button
            type="submit"
            disabled={readyState !== ReadyState.OPEN}
            className="disabled:bg-gray-500 w-full mt-5"
          >
            Send
          </Button>
        </div>
      </form>

      <DemoSocketRoom
        messageHistory={messageHistory}
        username={username}
        lastMessage={lastMessage}
      />
    </li>
  );
}

export default DemoSocket;
