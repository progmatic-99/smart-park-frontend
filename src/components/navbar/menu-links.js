import { Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import MenuItem from './menu-item'

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block"}}
      flexBasis={{ base: "100%", md: "auto" }}
    >  
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">
          Home
        </MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <Button background="brand.100" size="md" variant="ghost">
          <MenuItem to="/login">Log In</MenuItem>
        </Button>
        <Button background="brand.400" size="md" variant="ghost">
          <MenuItem to="/signup">Sign Up</MenuItem>
        </Button>
      </Stack>
    </Box>
  )
}

export default MenuLinks
