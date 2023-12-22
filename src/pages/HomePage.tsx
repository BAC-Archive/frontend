import React from "react";
import {
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";

import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";

const HomePage: React.FC = () => {
  return (
    <Center h="100vh">
      <Flex direction="row" align="center" justify="center">

        <Box mr={4}>
          <FirstCard />
        </Box>

        <Box mr={4}>
          <SecondCard />
        </Box>
      </Flex>
    </Center>
  );
};

export default HomePage;
