import { Header } from "~shared/ui";
import { CreateAccountForm } from "~entities/auth/ui";

function CreateAccount() {
	return (
		<>
			<Header description="Create an account" />
			<CreateAccountForm />
		</>
	);
}

export default CreateAccount;
