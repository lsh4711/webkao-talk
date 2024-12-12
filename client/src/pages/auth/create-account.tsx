import { Link, useNavigate } from "react-router";
import ky from "ky";

import type { z } from "zod";

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "~shared/shadcn/components/ui";
import { END_POINT_USERS } from "~shared/constants";
import { useCreateAccount } from "~entities/auth/model";

import type { createAccountSchema } from "~entities/auth/model";

type FormData = z.infer<typeof createAccountSchema>;

function CreateAccount() {
	const navigate = useNavigate();
	const form = useCreateAccount();

	const password = form.watch("password");
	const confirmPassword = form.watch("confirmPassword");

	const onSubmit = async (data: FormData) => {
		try {
			const response = await ky.post(`${END_POINT_USERS}signup`, {
				json: {
					username: data.userid,
					password: data.password,
				},
			});
			if (response.ok) {
				return await navigate("/login");
			}
		} catch (error) {
			console.error(error);
			throw new Error("Signup failed.");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
				<FormField
					control={form.control}
					name="userid"
					render={({ field }) => (
						<FormItem className="mb-3">
							<FormLabel>User ID</FormLabel>
							<FormControl>
								<Input placeholder="User ID" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="mb-5">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Password"
									type="password"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem className="mb-5">
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Confirm Password"
									type="password"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="mb-3"
					type="submit"
					disabled={!form.formState.isValid || password !== confirmPassword}
				>
					Submit
				</Button>
				<div>
					<span className="mr-2">Do you have an account?</span>
					<Link className="hover:underline" to="/">
						Please log in.
					</Link>
				</div>
			</form>
		</Form>
	);
}

export default CreateAccount;
