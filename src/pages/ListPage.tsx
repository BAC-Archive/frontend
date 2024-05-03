import React from "react";
import {
  ChakraProvider
} from "@chakra-ui/react";

import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";

const ListPage: React.FC = () => {
  return (
    <ChakraProvider> 
      <FirstCard />
      <SecondCard />
    </ChakraProvider>
  );
};

export default ListPage;
