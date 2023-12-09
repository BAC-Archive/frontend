import React from "react";
import {  Flex, Box, Link, Text, HStack, Button,  Container, Spacer} from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch"
const TopBar: React.FC = () => {
  return (
  
    <Container>
      <Flex  w="100%" px="10" py="5" align="center" justify="space-between">
        <HStack>
          <Box padding='4' >
            <Link >
              <Text as='b'>Home</Text>
            </Link>
          </Box>
          <Box padding='4'>
            <Link>
              <Text as='b'>AboutUs</Text>
            </Link>
          </Box>
          <Box padding='4'>
            <Link>
              <Text as='b'>RoadMap</Text>
            </Link>
          </Box>
        </HStack>

        <HStack>
        <Button as={Link} href='https://github.com/BAC-Archive'>
          <Text>Contribute</Text>
        </Button>
        <Box padding='4'>
          <Spacer />
        </Box>
        <DarkModeSwitch />
      </HStack>

      </Flex>
    </Container> 
        
        );
};

export default TopBar;

