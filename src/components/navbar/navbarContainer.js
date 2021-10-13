import { Flex } from '@chakra-ui/react'
import React from 'react'

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="brand.500"
      borderBottom="1px solid #1e1e2e"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavbarContainer
