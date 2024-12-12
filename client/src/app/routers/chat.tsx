import type { RouteObject } from "react-router";
import ChatDemo from "~pages/chat/chat-demo";
import ChatRoom from "~pages/chat/chat-room";
import ChatRoomList from "~pages/chat/chat-room-list";
import GroupChatRoom from "~pages/chat/group-chat-room";

export const CHAT_ROUTE: RouteObject[] = [
	{
		path: "/chat-room-list",
		element: <ChatRoomList />,
	},
	{
		path: "/chat-room/:roomId",
		element: <ChatRoom />,
	},
	{
		path: "/group-chat-room/:roomId",
		element: <GroupChatRoom />,
	},
	{
		path: "/chat-demo/:roomId",
		element: <ChatDemo />,
	},
];
