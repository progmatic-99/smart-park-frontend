import React from 'react'
import AppLogo from '../../assets/logo.svg'
import { Image } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/layout'

const Logo = (props) => {
  return (
    <Box {...props}>
      <Image src={AppLogo} alt="Smart Park Logo" w="30px" h="30px" />
      <Text fontSize="sm" fontWeight="bold" color="white">
        Smart Park
      </Text>
    </Box>
  )
}

export default Logo
