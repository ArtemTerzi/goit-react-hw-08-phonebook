import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, Navlink } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import AuthNav from 'components/AuthNav';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

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
          </NavList>
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
