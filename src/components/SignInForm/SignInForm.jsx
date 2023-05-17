import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();

    const user = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(user);
    dispatch(signIn(user));
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label htmlFor="">Email</label>
        <input type="email" name="email" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default SignInForm;
