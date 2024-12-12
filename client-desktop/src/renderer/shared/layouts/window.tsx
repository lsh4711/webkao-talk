import { Outlet } from "react-router-dom";

import { Button } from "~shared/shadcn/components/ui";
import { ToastContainer } from "react-toastify";

import {
	Close as CloseIcon,
	Maximize as MaximizeIcon,
	Minus as MinusIcon,
	Minimize as MinimizeIcon,
} from "src/renderer/assets/icon";
import { useWindowController } from "~features/window/model/use-window-controller";

function Window() {
	const {
		isMaximized,
		closeWindow,
		minimizeWindow,
		maximizeWindow,
		unmaximizeWindow,
	} = useWindowController();

	return (
		<>
			<nav className="fixed top-0 left-0 w-screen flex z-50">
				<Button className="text-white" onClick={closeWindow}>
					<CloseIcon />
				</Button>
				<Button className="text-white" onClick={minimizeWindow}>
					<MinusIcon />
				</Button>
				{isMaximized ? (
					<Button className="text-white" onClick={unmaximizeWindow}>
						<MinimizeIcon />
					</Button>
				) : (
					<Button className="text-white" onClick={maximizeWindow}>
						<MaximizeIcon />
					</Button>
				)}
			</nav>

			<main className="w-screen h-screen flex items-center justify-center bg-black flex-col">
				<Outlet />
				<ToastContainer />
			</main>
		</>
	);
}

export default Window;
