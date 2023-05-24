import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Button } from '@chakra-ui/react';
import { UserMenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <p>
        Welcome,
        <b> {user.name}</b>
      </p>
      <Button
        colorScheme="pink"
        variant="outline"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
