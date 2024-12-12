import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { router } from "./routers";
import { queryClient } from "./query";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
