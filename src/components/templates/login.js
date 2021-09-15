import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <Flex height="100vh" alignItems="flex-start" justifyContent="center">
      <Flex direction="column" p={12} rounded={24}>
        <Heading color="white" textAlign="center" mb={4}>SmartPark</Heading> 
        <FormControl isRequired>
          <FormLabel color="white">Email</FormLabel>
          <Input placeholder="email address" variant="filled" mb={4} type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color="white">Password</FormLabel>
          <Input placeholder="password" variant="filled" mb={6} type="password" />
        </FormControl>
        <Button variant="primary" mb={6}>Log In</Button>
        <Button variant="secondary" as={ReactLink} to="/signup" >Sign Up</Button>
      </Flex>
    </Flex>
  )
}

export default Login
