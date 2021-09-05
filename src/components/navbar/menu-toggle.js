import { Button } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Button size="sm" rounded={8} variant="hamburger" display={{ base: "block", md: "none"}} onClick={toggle} >
      {
        isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />
      }
    </Button>
  )
}

export default MenuToggle
