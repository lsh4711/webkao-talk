import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const signInSchema = z.object({
  userid: z.string().min(2, {
    message: 'User ID must be at least 2 characters.',
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.',
  }),
});

export const useSignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const userid = form.watch('userid');
  const password = form.watch('password');

  const disabledForm = !userid || !password || password.length < 3;

  return { form, disabledForm };
};
