import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Link, Text } from '@chakra-ui/react';

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link as={ReactLink} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
