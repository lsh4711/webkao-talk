import type { RouteObject } from "react-router";
import CreateAccount from "~pages/auth/create-account";
import Login from "~pages/auth/login";
import Logout from "~pages/auth/logout";
import AuthLayout from "~shared/layouts/auth.layout";

export const AUTH_ROUTES: RouteObject[] = [
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: "create-account",
				element: <CreateAccount />,
			},
			{
				path: "logout",
				element: <Logout />,
			},
		],
	},
];
