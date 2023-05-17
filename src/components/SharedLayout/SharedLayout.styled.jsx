import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid darkslategrey;
  margin-bottom: 12px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  text-decoration: none;
  gap: 12px;
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: black;

  &.active {
    color: coral;
    border-bottom: 1px solid coral;
  }

  &:hover,
  &:focus {
    color: red;
  }
`;
