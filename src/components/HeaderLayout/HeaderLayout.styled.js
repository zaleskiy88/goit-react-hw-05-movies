import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 60px;

  background-color: #f4efef;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Nav = styled.nav`
  margin-left: 50px;
`;

export const NavItem = styled(NavLink)`
  margin-right: 15px;
  color: black;
  text-decoration: none;
  border-radius: 4px;
  padding: 0px 5px;

  &.active {
    color: white;
    background-color: #1959ed;
  }

  :hover {
    background-color: #7c99dd;
  }
`;
