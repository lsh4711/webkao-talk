import { createBrowserRouter } from "react-router";

import { AUTH_ROUTES } from "./auth";
import { CHAT_ROUTE } from "./chat";

export const router = createBrowserRouter([...AUTH_ROUTES, ...CHAT_ROUTE]);
