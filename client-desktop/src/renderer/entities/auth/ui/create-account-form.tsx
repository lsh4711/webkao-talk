import { useCreateAccount } from '../model';
import { useOnCreateAccount } from '../api';

import { Form, Button } from '~shared/shadcn/components/ui';
import { CustomFormField } from '~shared/ui';

export const CreateAccountForm = () => {
  const { form, disabledForm } = useCreateAccount();
  const { onCreateAccount } = useOnCreateAccount();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCreateAccount)}
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
          description="Password should be at least 6 characters."
          type="password"
        />

        <CustomFormField
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          className="mb-5"
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
