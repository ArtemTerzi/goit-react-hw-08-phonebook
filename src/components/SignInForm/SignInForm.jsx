import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'redux/auth/operations';
import { Form, FormTitle, LoginLink } from './SignInForm.styled';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const handleSumbit = e => {
    e.preventDefault();

    dispatch(
      signIn({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    );
  };

  return (
    <>
      <Form onSubmit={handleSumbit}>
        <FormTitle>Sign in</FormTitle>
        <label htmlFor="email">Email</label>
        <Input
          focusBorderColor="pink.400"
          pr="1.5rem"
          border="1px solid grey"
          mb="2"
          placeholder="Enter email"
          type="email"
          name="email"
          id="email"
          isRequired
        />
        <label htmlFor="password">Password</label>
        <InputGroup size="md">
          <Input
            focusBorderColor="pink.400"
            pr="1.5rem"
            border="1px solid grey"
            mb="2"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            name="password"
            id="password"
            isRequired
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          colorScheme="blue"
          variant="outline"
          m="12px auto"
          display="block"
          type="submit"
        >
          Login
        </Button>
        <LoginLink onClick={() => navigate('/register')}>
          Create new account
        </LoginLink>
      </Form>
    </>
  );
};

export default SignInForm;
