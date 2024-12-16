import { Outlet } from "react-router";

function AuthLayout() {
	return (
		<main className="flex  min-h-screen  items-center justify-center h-screen">
			<section className="flex items-center justify-center w-6/12 bg-black text-white h-full">
				<h1>Auth Layout</h1>
			</section>
			<section className="flex items-center justify-center w-6/12 h-full">
				<Outlet />
			</section>
		</main>
	);
}

export default AuthLayout;
