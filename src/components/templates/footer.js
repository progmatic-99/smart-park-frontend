import { Box, ButtonGroup, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack>
        {/* <Stack direction="row" spacing="4" align="center" justify="space-between">
        </Stack> */}
        <SocialMediaLinks />
        <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
      </Stack>
    </Box>
  )
}

const Copyright = (props) => {
  return (
    <Text fontSize="sm" {...props}>
      &copy; {new Date().getFullYear()} <FaHeart /> from progmatic99
    </Text>
  )
}

const SocialMediaLinks = (props) => {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
      <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
      <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    </ButtonGroup>
  )
}

export default Footer
