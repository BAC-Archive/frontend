import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Button,
} from "@chakra-ui/react";





const FirstCard: React.FC = () => {
  const buttonSpacing = 2;
  return (

    <Card>
      <CardHeader>
        <Heading size="md">1ère Bac</Heading>
      </CardHeader>
      <CardBody>
        <Button
          variant="outline"
          colorScheme="teal"
          mb={buttonSpacing}
          w="100%"
        >
          Science Mathématiques
        </Button>
        <Button
          variant="outline"
          colorScheme="orange"
          mb={buttonSpacing}
          w="100%"
        >
          Science Expérimentales
        </Button>
        <Button
          variant="outline"
          colorScheme="purple"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences et Technologies Électriques
        </Button>
        <Button
          variant="outline"
          colorScheme="yellow"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences et Technologies Mécaniques
        </Button>
        <Button
          variant="outline"
          colorScheme="pink"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences Économiques et Gestion
        </Button>
        <Button
          variant="outline"
          colorScheme="cyan"
          mb={buttonSpacing}
          w="100%"
        >
          Lettres et Sciences Humaines
        </Button>
      </CardBody>
    </Card>
  );
}

export default FirstCard;
