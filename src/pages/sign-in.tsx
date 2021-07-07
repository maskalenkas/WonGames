import FormSignIn from 'components/FormSignIn';
import Auth from 'templates/Auth';

export default function signIn() {
  return (
    <Auth title="Sign Up">
      <FormSignIn />
    </Auth>
  );
}
