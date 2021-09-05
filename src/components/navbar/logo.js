import React from 'react'
import AppLogo from '../../assets/logo.svg'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'

const Logo = (props) => {
  return (
    <Box {...props}>
      <Image src={AppLogo} alt="Smart Park Logo" w="40px" h="40px" />  
    </Box>
  )
}

export default Logo
