import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import appImg from '../../assets/app.png';

const Home = () => {
  return (
    <Flex
      h="100vh"
      justifyContent="center"
      direction={['column', 'column', 'row', 'row']}
      wrap="wrap"
    >
      <Box
        w={['auto', 'auto', '50%', '55%']}
        h={['50%', '50%', 'inherit', 'inherit']}
      ></Box>
      <Box
        w={['auto', 'auto', '50%', '45%']}
        h={['50%', '50%', 'inherit', 'inherit']}
        justifySelf="center"
        p={3}
      >
        <Image src={appImg} />
        <Heading
          fontSize={['3em', '3em', '4em', '5em']}
          mt={['0', '0', '6rem', '6rem']}
          ml={['1rem', '1rem', '1rem', '3rem']}
          color="white"
        >
          SmartPark
        </Heading>
        <Text
          fontSize="xl"
          ml={['1rem', '1rem', '1rem', '3rem']}
          mt={['0.3rem', '0.7rem', '1rem', '1rem']}
          fontWeight="700"
          color="brand.100"
        >
          Smarter Contactless Parking
        </Text>
        <Text fontSize="md" ml={['1rem', '1rem', '1rem', '3rem']} color="white">
          Save your precious time.
          <br /> Book your parking slots before going out.
        </Text>
      </Box>
    </Flex>
  );
};

export default Home;
