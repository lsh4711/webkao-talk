import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const createAccountSchema = z.object({
	userid: z.string().min(2, {
		message: "User ID must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
	confirmPassword: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

export const useCreateAccount = () => {
	const form = useForm<z.infer<typeof createAccountSchema>>({
		resolver: zodResolver(createAccountSchema),
	});

	return form;
};
