import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Button colorScheme="blue" variant="outline">
        <NavLink to="/register"> Sign Up</NavLink>
      </Button>
      <Button colorScheme="pink" variant="outline" ml="8px">
        <NavLink to="/login"> Sign In</NavLink>
      </Button>
    </>
  );
};

export default AuthNav;
