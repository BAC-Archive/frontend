import React from "react";
import { Link as ReactLink } from 'react-router-dom';
import { Flex, Box, Link, Text, HStack, Button, Container, } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";

const LandingTopBar: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction={{ base: "column", md: "row" }} w="100%" px={{ base: "4", md: "10" }} py="5" align="center" justify="space-between">
        <HStack spacing={{ base: "2", md: "4" }} mb={{ base: "4", md: "0" }}>
          <Box padding={{ base: "2", md: "4" }}>
            <Link as={ReactLink} to="/Home">
              <Text as="b">Home</Text>
            </Link>
          </Box>
          <Box padding={{ base: "2", md: "4" }}>
            <Link>
              <Text as="b">About Us</Text>
            </Link>
          </Box>
          <Box padding={{ base: "2", md: "4" }}>
            <Link>
              <Text as="b">Road Map</Text>
            </Link>
          </Box>
        </HStack>

        <HStack spacing={{ base: "2", md: "4" }}>
          <Button as={Link} href="https://github.com/BAC-Archive">
            <Text>Contribute</Text>
          </Button>
          <DarkModeSwitch />
        </HStack>
      </Flex>
    </Container>
  );
};

export default LandingTopBar;
