import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/styles.css";
import LandingTopBar from "../components/LandingTopBar"
const LandingPage: React.FC = () => {
  return (
    <ChakraProvider>
      <LandingTopBar />
    </ChakraProvider>
  );
};

export default LandingPage;

