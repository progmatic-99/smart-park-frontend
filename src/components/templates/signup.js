import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Flex height="100vh" alignItems="flex-start" justifyContent="center">
      <Flex direction="column" p={12} rounded={24}>
        <Heading color="white" textAlign="center" mb={6}>Sign Up</Heading> 
        <Input placeholder="ten-digit-phone-number" variant="filled" mb={6} type="number" />
        <Input placeholder="password" variant="filled" mb={6} type="password" />
        <Button variant="secondary">Sign Up</Button>
      </Flex>
    </Flex>
  )
}

export default Signup
