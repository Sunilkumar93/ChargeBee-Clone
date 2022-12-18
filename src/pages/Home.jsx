import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Billing from "../components/home/Billing";
import HomeSlider from "../components/home/HomeSlider";
import LogoSlider from "../components/home/LogoSlider";
import Scrolltab from "../components/home/Scrolltab";

const Home = () => {
  
  return (
    <Container
      display="flex"
      flexDirection="column"
      mt={{ base: "-240px", md: "120px", lg: "100px" }}
      gap={"55px"}
      px="10px"
      maxW={{ base: "95%", md: "90%", lg: "95%" }}
    >
      <HomeSlider />
      <LogoSlider />
      <Billing />
      <VStack
        m="auto"
        alignItems="start"
        w={{ base: "100%", lg: "50%" }}
        px="6"
        mt="15px"
      >
        <Heading>Streamline Revenue Operations</Heading>
        <Text color="#64648c" textAlign={{ base: "start", lg: "center" }}>
          Chargebee automates the lead-to-ledger workflow across your revenue
          stack, so you can dream, deploy, and enjoy the breeze. While the MRR
          just keeps rolling.
        </Text>
      </VStack>
      <Scrolltab />
    </Container>
  );
};

export default Home;
