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
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="name">User Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Register Now</button>
      </form>
    </>
  );
};

export default SignUpForm;
