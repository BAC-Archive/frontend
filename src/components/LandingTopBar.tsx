import React from "react";
import { ChakraProvider, Flex, Box, Link, Text, Center,HStack, Button, Spacer, Container} from "@chakra-ui/react";

const TopBar: React.FC = () => {
  return (
  
    //<Flex w="100%" px="6" py="5" align="center" justify="space-between">
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
        <Button as={Link} href='https://github.com/BAC-Archive'>
          <Text>Contribute</Text>
        </Button>

        </Flex>
       </Container> 
        
        );
};

export default TopBar;

