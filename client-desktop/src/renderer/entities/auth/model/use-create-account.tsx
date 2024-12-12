import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const createAccountSchema = z.object({
  userid: z.string().min(2, {
    message: 'User ID must be at least 2 characters.',
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.',
  }),
  confirmPassword: z.string().min(4, {
    message: 'Password must be at least 4 characters.',
  }),
});

export const useCreateAccount = () => {
  const form = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
  });

  const userid = form.watch('userid');
  const password = form.watch('password');
  const confirmPassword = form.watch('confirmPassword');

  const disabledForm =
    !userid || !password || password !== confirmPassword || password.length < 4;

  return { form, disabledForm };
};
