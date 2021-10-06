import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import appImg from '../../assets/app.webp';

const Home = () => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      direction={['column-reverse', 'row', 'row', 'row']}
      wrap="wrap"
      align={['center', 'flex-start', 'flex-start', 'flex-start']}
    >
      <Image
        w={['100%', '50%', '55%', '55%']}
        h={['70%', '60%', '70%', '100%']}
        src={appImg}
      />
      <Box
        w={['100%', '50%', '45%', '45%']}
        h={['30%', '40%', '70%', '100%']}
        p={3}
        textAlign={['center', 'left', 'left', 'left']}
      >
        <Heading
          fontSize={['3em', '2.5em', '3.7em', '5em']}
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
