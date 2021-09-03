import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import MenuItem from './menu-item'
import Logo from './logo'

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
          <Logo 
            w="100px"
          />
        </MenuItem>
        <MenuItem to="/about">About</MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks
