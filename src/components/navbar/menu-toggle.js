import { Box } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none"}} onClick={toggle} >
      {
        isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />
      }
    </Box>
  )
}

export default MenuToggle
