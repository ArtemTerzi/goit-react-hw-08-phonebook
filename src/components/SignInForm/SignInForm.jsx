import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();

    dispatch(
      signIn({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default SignInForm;
