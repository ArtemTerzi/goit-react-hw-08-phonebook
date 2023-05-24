import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, Navlink } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import AuthNav from 'components/AuthNav';
import Footer from 'components/Footer';

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
        <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
