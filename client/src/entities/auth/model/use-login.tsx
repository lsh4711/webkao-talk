import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
	userid: z.string().min(2, {
		message: "User ID must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

export const useLogin = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
	});

	return form;
};
