import { SignInForm } from '~entities/auth/ui/sign-in-form';
import { Header } from '~shared/ui';

function SignIn() {
  return (
    <>
      <Header description="시작하기" />
      <SignInForm />
    </>
  );
}

export default SignIn;
