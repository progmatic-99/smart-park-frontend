import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Flex
      h="100vh"
      justifyContent="center"
      direction={["column", "column", "row", "row"]}
      wrap="wrap"
    >
        <Box 
          w={["auto", "auto", "50%", "55%"]}
          h={["50%", "50%", "inherit", "inherit"]}
        >
        </Box>
        <Box 
          w={["auto", "auto", "50%", "45%"]}
          h={["50%", "50%", "inherit", "inherit"]}
          justifySelf="center"
          p={3}
        >
          <Heading fontSize="4em" mt={["0", "0", "6rem", "6rem"]} ml={["0", "1rem", "1rem", "3rem"]} color="brand.100">SmartPark</Heading>
          <Text fontSize="xl" ml={["0", "1rem", "1rem", "3rem"]} mt={["1rem", "1rem", "2rem", "2rem"]} fontWeight="700" color="white">Smarter Contactless Parking</Text>
          <Text fontSize="md" ml={["0", "1rem", "1rem", "3rem"]} color="white">Save your precious time.<br/> Book your parking slots before going out.</Text>
        </Box>
    </Flex>
  )
}

export default Home
