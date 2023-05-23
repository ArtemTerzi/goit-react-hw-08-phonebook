import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register"> Sign Up</NavLink>
      <NavLink to="/login"> Sign In</NavLink>
    </>
  );
};

export default AuthNav;
