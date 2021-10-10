import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import ButtonLink from './button-link';
import MenuItem from './menu-item';

const MenuLinks = ({ isOpen, toggle }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={10}
        align={['left', 'left', 'center', 'center']}
        justify={['center', 'space-around', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem onClick={toggle} to="/">
          Home
        </MenuItem>
        <Link href="https://blog.progmatic99.xyz" isExternal>
          Blog
          <ExternalLinkIcon mx="2px" />
        </Link>
        <Link onClick={toggle} to="/login">
          Log in
        </Link>
        <ButtonLink
          onClick={toggle}
          to="/signup"
          variant="secondary"
          rounded={24}
        >
          Sign up
        </ButtonLink>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
