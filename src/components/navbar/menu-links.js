import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ButtonLink from './button-link'
import MenuItem from './menu-item'

const MenuLinks = ({ isOpen, toggle }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block"}}
      flexBasis={{ base: "100%", md: "auto" }}
    >  
      <Stack
        spacing={10}
        align={["left", "left", "center", "center"]}
        justify={["center", "space-around", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem onClick={toggle} to="/">Home</MenuItem>
        <MenuItem onClick={toggle} to="/about">About</MenuItem>
        <ButtonLink onClick={toggle} to="/login" variant="primary" rounded={24}>
          Log In
        </ButtonLink>
        <ButtonLink onClick={toggle} to="/signup" variant="secondary" rounded={24}>
          Sign Up
        </ButtonLink>
      </Stack>
    </Box>
  )
}

export default MenuLinks
