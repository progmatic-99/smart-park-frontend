import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

const UserNav = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        araia-label="user-profile"
        icon={<FaUserCircle />}
      />
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>Book a Slot</MenuItem>
          <MenuItem>Previous Parkings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>Log Out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default UserNav;
