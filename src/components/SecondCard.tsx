import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Button,
} from "@chakra-ui/react";





const SecondCard: React.FC = () => {
  const buttonSpacing = 2;
  return (

    <Card>
      <CardHeader>
        <Heading size="md">2ème Bac :</Heading>
      </CardHeader>
      <CardBody>
        <Button
          variant="outline"
          colorScheme="blue"
          mb={buttonSpacing}
          w="100%"
        >
          Science Mathématiques A
        </Button>
        <Button
          variant="outline"
          colorScheme="green"
          mb={buttonSpacing}
          w="100%"
        >
          Science Mathématiques B
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences Physiques
        </Button>
        <Button
          variant="outline"
          colorScheme="brown"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences de la Vie et de la Terre (SVT)
        </Button>
        <Button
          variant="outline"
          colorScheme="indigo"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences Agronomiques
        </Button>
        <Button
          variant="outline"
          colorScheme="yellow"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences et Technologies Électriques
        </Button>
        <Button
          variant="outline"
          colorScheme="pink"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences et Technologies Mécaniques
        </Button>
        <Button
          variant="outline"
          colorScheme="orange"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences Économiques
        </Button>
        <Button
          variant="outline"
          colorScheme="purple"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences de Gestion Comptable (SGC)
        </Button>
        <Button
          variant="outline"
          colorScheme="cyan"
          mb={buttonSpacing}
          w="100%"
        >
          Lettres
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          mb={buttonSpacing}
          w="100%"
        >
          Sciences Humaines
        </Button>
      </CardBody>
    </Card>
  );
}

export default SecondCard;
