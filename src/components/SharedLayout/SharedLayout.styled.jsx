import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-bottom: 1px solid hotpink;
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
  color: hotpink;
  font-family: 'Shrikhand';

  &.active {
    color: royalblue;
    border-bottom: 1px solid royalblue;
  }

  &:hover,
  &:focus {
    color: blue;
  }
`;
