import { useCallback, useEffect } from "react";

type UseDemoBroadcastProps = {
	channelName: string;
	onMessage: (message: string) => void;
};

export const useDemoBroadcast = ({
	channelName,
	onMessage,
}: UseDemoBroadcastProps) => {
	const channel = new BroadcastChannel(channelName);

	const sendBroadcastMessage = useCallback(
		(message: string) => {
			channel.postMessage(message);
		},
		[channel],
	);

	useEffect(() => {
		channel.onmessage = (event: MessageEvent) => {
			onMessage(event.data);
		};

		return () => {
			channel.close();
		};
	}, [onMessage, channel]);

	return { sendBroadcastMessage };
};
