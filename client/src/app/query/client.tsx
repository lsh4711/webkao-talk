import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 10000,
		},
		mutations: {
			onError: (err) => {
				console.error("변이 오류:", err);
			},
			onSuccess: () => {
				console.log("변이 성공");
			},
		},
	},
});
