import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Link, Button } from '@chakra-ui/react'

const ButtonLink = ({ children, to="/", ...rest }) => {
  return (
    <Link as={ReactLink} to={to}>
      <Button {...rest}>
        {children}
      </Button>
    </Link>
  );
}

export default ButtonLink
