import { Flex } from '@chakra-ui/react'
import React from 'react'

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg=""
      color={["white", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavbarContainer
