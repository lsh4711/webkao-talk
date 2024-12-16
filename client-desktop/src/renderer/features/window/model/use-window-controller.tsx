import { useState } from "react";

type WindowAction =
	| "close"
	| "minimize"
	| "maximize"
	| "unmaximize"
	| "restore"
	| "toggledevtools";

export const useWindowController = () => {
	const [isMaximized, setIsMaximized] = useState(false);

	const closeWindow = () => {
		window.electron.ipcRenderer.sendWindowAction("close");
	};

	const minimizeWindow = () => {
		window.electron.ipcRenderer.sendWindowAction("minimize");
	};

	const maximizeWindow = () => {
		setIsMaximized(true);
		window.electron.ipcRenderer.sendWindowAction("maximize");
	};

	const unmaximizeWindow = () => {
		setIsMaximized(false);
		window.electron.ipcRenderer.sendWindowAction("unmaximize");
	};

	return {
		isMaximized,
		closeWindow,
		minimizeWindow,
		maximizeWindow,
		unmaximizeWindow,
	};
};
