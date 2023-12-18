import React from "react";
import { SimpleGrid, Card, CardHeader, CardBody, Heading, Text, Box, } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  return (
    <Box top="50%">
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
          <CardHeader>
            <Heading size='md'>1ère Bac</Heading>
          </CardHeader >
          <CardBody>
            <Text>Science Mathématiques</Text>
            <Text>Science Expérimentale</Text>
          </CardBody>
        </Card >

        <Card>
          <CardHeader>
            <Heading size='md'>2ème Bac</Heading>
          </CardHeader >
          <CardBody>
            <Text>Science Mathématiques</Text>
            <Text>Science Expérimentale</Text>
          </CardBody>
        </Card >

      </SimpleGrid >
    </Box >
  );

}

export default HomePage;

