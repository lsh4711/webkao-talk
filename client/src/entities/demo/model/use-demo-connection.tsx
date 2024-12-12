import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

type UseDemoSocketConnectionProps = {
	socketUrl: string;
};

export const useDemoSocketConnection = ({
	socketUrl,
}: UseDemoSocketConnectionProps) => {
	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
	const [messageHistory, setMessageHistory] = useState<MessageEvent<unknown>[]>(
		[],
	);

	useEffect(() => {
		if (lastMessage) {
			setMessageHistory((prev) => [...prev, lastMessage]);
		}
	}, [lastMessage]);

	const connectionStatus = {
		[ReadyState.CONNECTING]: "Connecting",
		[ReadyState.OPEN]: "Open",
		[ReadyState.CLOSING]: "Closing",
		[ReadyState.CLOSED]: "Closed",
		[ReadyState.UNINSTANTIATED]: "Uninstantiated",
	}[readyState];

	return {
		sendMessage,
		messageHistory,
		connectionStatus,
		lastMessage,
		readyState,
		setMessageHistory,
	};
};
