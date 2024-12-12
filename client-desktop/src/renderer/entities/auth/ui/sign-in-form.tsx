import { useSignIn } from '../model';
import { useOnSignIn } from '../api';

import { Form, Button } from '~shared/shadcn/components/ui';
import { CustomFormField } from '~shared/ui';

export const SignInForm = () => {
  const { form, disabledForm } = useSignIn();
  const { onSignIn } = useOnSignIn();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSignIn)}
        className="flex flex-col text-white"
      >
        <CustomFormField
          control={form.control}
          name="userid"
          label="User ID"
          description="User ID should be at least 2 characters."
          type="text"
        />

        <CustomFormField
          control={form.control}
          name="password"
          label="Password"
          description="Password should be at least 4 characters."
          type="password"
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
