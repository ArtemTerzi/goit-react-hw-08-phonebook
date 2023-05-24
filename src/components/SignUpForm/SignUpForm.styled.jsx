import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  max-width: 440px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid teal;
  border-radius: 6px;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginLink = styled(Link)`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: hotpink;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
`;
