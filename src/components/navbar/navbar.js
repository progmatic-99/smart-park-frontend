import { Spacer } from '@chakra-ui/react'
import React from 'react'
import Logo from './logo'
import MenuLinks from './menu-links'
import MenuToggle from './menu-toggle'
import NavbarContainer from './navbar-container'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavbarContainer {...props}>
      <Logo />
      <Spacer />
      {/* <ColorModeSwitcher /> */}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  )
}

export default Navbar
