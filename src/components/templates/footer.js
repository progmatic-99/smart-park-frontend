import { Box, ButtonGroup, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      bg={["transparent", "transparent", "brand.200", "brand.200"]}
      w="100%"
      py="12"
      px={{ base: '4', md: '8' }}
      sx={{ position: '-webkit-sticky', bottom: '0'}}
    >
        <Stack direction="row" spacing="4" align="center" justify="space-around">
          <Copyright />
          <SocialMediaLinks />
        </Stack>
    </Box>
  )
}

const Copyright = (props) => {
  return (
    <Text fontSize="sm" {...props} color="brand.400">
      &copy; {new Date().getFullYear()}<FaHeart />from progmatic99
    </Text>
  )
}

const SocialMediaLinks = (props) => {
  return (
    <ButtonGroup variant="iconButton" {...props}>
      <IconButton as="a" href="https://www.linkedin.com/in/shubham-upreti/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
      <IconButton as="a" href="https://github.com/progmatic-99/smart-park-frontend" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
      <IconButton as="a" href="https://twitter.com/progmatic99" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    </ButtonGroup>
  )
}

export default Footer
