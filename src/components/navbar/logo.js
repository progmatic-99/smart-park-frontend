import React from 'react'
import AppLogo from '../../assets/logo.svg'
import { Image } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/layout'

const Logo = (props) => {
  return (
    <Box {...props}>
      <Image src={AppLogo} alt="Smart Park Logo" />
      <Text fontSize="md" fontWeight="bold">
        Smart Park
      </Text>
    </Box>
  )
}

export default Logo
