import React from "react";
import { SimpleGrid, Card, CardHeader, CardBody, Heading, Center, Button } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  return (
    <Center h="100vh">
      <SimpleGrid columns={1} spacing={4}>
        <Card mb={4}>
          <CardHeader>
            <Heading size="md">1ère Bac</Heading>
          </CardHeader>
          <CardBody>
            <Center>
              <Button variant="outline" colorScheme="blue" mb={2}>
                Science Mathématiques
              </Button>
            </Center>
            <Center>
              <Button variant="outline" colorScheme="green">
                Science Expérimentale
              </Button>
            </Center>
          </CardBody>
        </Card>

        <Card mb={4}>
          <CardHeader>
            <Heading size="md">2ème Bac</Heading>
          </CardHeader>
          <CardBody>
            <Center>
              <Button variant="outline" colorScheme="blue" mb={2}>
                Science Mathématiques
              </Button>
            </Center>
            <Center>
              <Button variant="outline" colorScheme="green">
                Science Expérimentale
              </Button>
            </Center>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Center>
  );
}

export default HomePage;
