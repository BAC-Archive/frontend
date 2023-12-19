import React from "react";
import { ChakraProvider, Box, Text, Link, Button, Flex, Spacer } from "@chakra-ui/react";
import LandingTopBar from "../components/LandingTopBar";

const LandingPage: React.FC = () => {
  return (
    <ChakraProvider>
      <LandingTopBar />

      <Spacer mt={{ base: 4, md: 8, lg: 12 }} />

      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
      >
        <Box
          width={{ base: "90%", md: "75%", lg: "50%" }}
          p={{ base: 4, md: 8 }}
          my={{ base: 8, md: 16 }}
          textAlign="left"
        >
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="900"
            fontSize={{ base: "24px", md: "32px", lg: "40px" }}
            lineHeight="50px"
          >
            Revolutionizing the Moroccan Education System
          </Text>
        </Box>

        <Box
          width={{ base: "90%", md: "75%", lg: "50%" }}
          p={{ base: 4, md: 8 }}
          my={{ base: 4, md: 8 }}
          textAlign="left"
        >
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ base: "24px", md: "32px", lg: "40px" }}
            lineHeight={{ base: "28px", md: "36px", lg: "43px" }}
          >
            Open-source education for Morocco's future. Break free from outdated
            resources, join the excellence revolution. Got ideas? Join us on
            GitHub, let's make education awesome and free together!
          </Text>
          <Box my={{ base: 8, md: 16 }}>
            <Button as={Link} href="https://github.com/BAC-Archive">
              <Text>Contribute</Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LandingPage;
