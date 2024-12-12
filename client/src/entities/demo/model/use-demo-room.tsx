import { useState } from "react";

function useDemoRoom() {
	const [rooms, setRooms] = useState<number[]>([1, 2, 3, 4, 5]);

	const handleAddRoom = () => {
		setRooms((prev) => [...prev, prev.length + 1]);
	};

	return { rooms, handleAddRoom };
}

export default useDemoRoom;
