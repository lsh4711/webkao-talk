import { v4 as uuidv4 } from 'uuid';
import { splitString } from './model';
import { useEffect } from 'react';

type DemoSocketRoomProps = {
  messageHistory: MessageEvent<unknown>[];
  username: string;
  lastMessage?: MessageEvent<unknown> | unknown;
  onRoomChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function DemoSocketRoom({ messageHistory, username, lastMessage }: DemoSocketRoomProps) {
  const id = uuidv4();

  return (
    <div className="p-5 mt-3 bg-stone-500 rounded-md">
      <h2 className="text-white">Chat Room</h2>

      <ul>
        {messageHistory.map((message, index) => {
          const [name, value] = splitString(message.data as string);

          return (
            <>
              <li className="text-white mt-3 " key={`${index}${username}${id}${name}${value}`}>
                <span
                  className={`rounded-md bg-white mr-5 p-1 ${
                    name === username ? 'text-orange-400' : ' text-black'
                  }`}
                >
                  {name}
                </span>

                <span className={lastMessage === message ? 'text-orange-300' : ''}>{value}</span>
              </li>

              {lastMessage === message && <hr className=" mt-2 pl-1 pr-1 border-2" />}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default DemoSocketRoom;
