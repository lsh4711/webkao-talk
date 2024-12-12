import { v4 as uuidv4 } from "uuid";

import DemoSocket from "~entities/demo/demo-socket";
import useDemoRoom from "~entities/demo/model/use-demo-room";
import { Button } from "~shared/shadcn/components/ui";

const ChatDemo = () => {
	const { rooms, handleAddRoom } = useDemoRoom();

	const id = uuidv4();

	return (
		<main>
			<ul className="grid grid-cols-5">
				{rooms.map((roomId) => (
					<DemoSocket key={`${id} ${roomId}`} />
				))}
			</ul>

			<div className="p-5">
				<Button className="mt-5" onClick={handleAddRoom}>
					Add Room
				</Button>
			</div>
		</main>
	);
};

export default ChatDemo;
