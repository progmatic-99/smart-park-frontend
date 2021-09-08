import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Flex height="100vh" alignItems="flex-start" justifyContent="center">
      <Flex direction="column" p={12} rounded={24}>
        <Heading color="white" textAlign="center" mb={6}>SmartPark</Heading> 
        <Input placeholder="your-phone-number" variant="filled" mb={6} type="number" />
        <Input placeholder="******" variant="filled" mb={6} type="password" />
        <Button variant="primary" mb={6}>Log In</Button>
        <Button variant="secondary">Sign Up</Button>
      </Flex>
    </Flex>
  )
}

export default Login
