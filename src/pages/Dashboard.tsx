import React from "react";
import { Card, CardHeader, CardBody, CardFooter, ChakraProvider, SimpleGrid, Heading, Button, Text, Center} from '@chakra-ui/react';
const Dashboard: React.FC = () => {
  return (
  <Center>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card>
        <CardHeader>
          <Heading size='md'>Combinatoires</Heading>
        </CardHeader>
        <CardBody>
          <Text>Mathématiques; 1ÈRE BAC SM</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
      </Card>
   <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
    </Card>
    <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
    </Card>
</SimpleGrid>
</Center>
  );

};

export default Dashboard;
