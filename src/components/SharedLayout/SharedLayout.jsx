import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, Navlink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <Navlink to="/"> Home</Navlink>
            </li>
            <li>
              <Navlink to="/contacts"> Contacts</Navlink>
            </li>
            <li>
              <Navlink to="/register"> Sign Up</Navlink>
            </li>
            <li>
              <Navlink to="/login"> Sign In</Navlink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
