import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Window from "~shared/layouts/window";
import CreateAccount from "../pages/auth/create-account";

import { queryClient } from "./query";
import "./app.css";

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MemoryRouter>
				<Routes>
					<Route path="/" element={<Window />}>
						<Route path="/" element={<CreateAccount />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</QueryClientProvider>
	);
}
