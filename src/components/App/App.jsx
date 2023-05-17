import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomePage = lazy(() => import('components/pages/HomePage'));
const ContactsPage = lazy(() => import('components/pages/ContactsPage'));
const RegisterPage = lazy(() => import('components/pages/RegisterPage'));
const SignInPage = lazy(() => import('components/pages/SignInPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};
