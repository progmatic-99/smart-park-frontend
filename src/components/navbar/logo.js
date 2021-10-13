import React from 'react';
import AppLogo from '../../assets/logo.svg';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { useHistory } from 'react-router-dom';

const Logo = props => {
  const history = useHistory();

  return (
    <Box {...props} as="button" onClick={() => history.push('/')}>
      <Image src={AppLogo} alt="Smart Park Logo" w="30px" h="30px" />
    </Box>
  );
};

export default Logo;
