import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  Nav,
  NavItem,
} from 'components/HeaderLayout/HeaderLayout.styled';

const HeaderLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HeaderLayout;
