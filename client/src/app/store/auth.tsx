import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
	webkaotoken: string | null;
	login: (token: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	webkaotoken: Cookies.get("webkaotoken") || null,
	login: (token) => {
		Cookies.set("webkaotoken", token, {
			expires: 7,
			path: "/",
		});
		set({ webkaotoken: token });
	},
	logout: () => {
		// 쿠키 제거
		Cookies.remove("webkaotoken");
		set({ webkaotoken: null });
	},
}));
