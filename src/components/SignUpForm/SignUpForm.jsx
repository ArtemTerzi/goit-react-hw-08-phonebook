import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();

    const newUser = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };

    dispatch(register(newUser));
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label htmlFor="">Email</label>
        <input type="email" name="email" />
        <label htmlFor="">User Name</label>
        <input type="text" name="name" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" />
        <button type="submit">Register Now</button>
      </form>
    </>
  );
};

export default SignUpForm;
