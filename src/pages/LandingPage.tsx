import React from "react";
import { ChakraProvider, Box, Text, Link,Button} from "@chakra-ui/react";
import LandingTopBar from "../components/LandingTopBar"
const LandingPage: React.FC = () => {
  return (
    <ChakraProvider>
      <LandingTopBar />
      <Box
        position="absolute"
        width="837px"
        height="321px"
        left="25%"
        top="25%"
        transform="translate(-25%, 50%)"
        p="8" // Add your padding
      >
 
        <Text
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="900"
          fontSize="40px"
          lineHeight="50px"
        >
          Revolutionizing the Moroccan Education System
        </Text>
      </Box>

      <Box
        position="absolute"
        width="837px"
        height="321px"
        left="25%"
        top="50%"
        transform="translate(-25%, 75%)"
        p="8" // Add your padding
        my="8"
      >
        <Text
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize="40px"
          lineHeight="43px"
        >
          Open-source education for Morocco's future. Break free from outdated
          resources, join the excellence revolution. Got ideas? Join us on
          GitHub, let's make education awesome and free together!
        </Text>
        <Box my="8">
          <Button as={Link} href='https://github.com/BAC-Archive'>
          <Text>Contribute</Text>
          </Button>
        </Box>
      </Box>

    </ChakraProvider>
      
  );
};

export default LandingPage;

