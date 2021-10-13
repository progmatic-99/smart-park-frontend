import { Spacer } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../context/userContext';
import UserNav from '../user/userNav';
import Logo from './logo';
import MenuLinks from './menuLinks';
import MenuToggle from './menuToggle';
import NavbarContainer from './navbarContainer';

const Navbar = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    state: { user },
  } = useAuth();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo />
      <Spacer />
      {/* <ColorModeSwitcher /> */}
      {user ? (
        <UserNav />
      ) : (
        <>
          <MenuToggle toggle={toggle} isOpen={isOpen} />
          <MenuLinks isOpen={isOpen} toggle={toggle} />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
