import { useCreateAccount } from "../model";
import { useOnCreateAccount } from "../api";

import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormLabel,
	FormMessage,
	FormDescription,
	Input,
	Button,
} from "~shared/shadcn/components/ui";

export const CreateAccountForm = () => {
	const { form, disabledForm } = useCreateAccount();
	const { onCreateAccount } = useOnCreateAccount();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onCreateAccount)}
				className="flex flex-col text-white"
			>
				<FormField
					control={form.control}
					name="userid"
					render={({ field }) => (
						<FormItem className="mb-3">
							<FormLabel>User ID</FormLabel>
							<FormDescription className="text-sm text-zinc-400">
								User ID should be at least 2 characters.
							</FormDescription>
							<FormControl>
								<Input placeholder="User ID" {...field} />
							</FormControl>
							<FormMessage className="text-sm text-red-400" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="mb-2">
							<FormLabel>Password</FormLabel>
							<FormDescription className="text-sm text-zinc-400">
								Password should be at least 6 characters.
							</FormDescription>
							<FormControl>
								<Input type="password" placeholder="Password" {...field} />
							</FormControl>
							<FormMessage className="text-sm text-red-400" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem className="mb-4">
							<FormLabel>Confirm Password</FormLabel>

							<FormControl>
								<Input
									type="password"
									placeholder="Confirm Password"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-sm text-red-400" />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className=" bg-white disabled:bg-red-50 text-black"
					disabled={disabledForm}
				>
					Create Account
				</Button>
			</form>
		</Form>
	);
};
