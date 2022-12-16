import { Container } from "@chakra-ui/react";
import React from "react";
import Billing from "../components/home/Billing";
import HomeSlider from "../components/home/HomeSlider";
import LogoSlider from "../components/home/LogoSlider";

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
    </Container>
  );
};

export default Home;
