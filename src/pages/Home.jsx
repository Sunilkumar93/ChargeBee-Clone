import { Container } from "@chakra-ui/react";
import React from "react";
import HomeSlider from "../components/home/HomeSlider";

const Home = () => {
  return (
    <Container pt="120px" px="0" maxW={{ base: "95%", md: "90%", lg: "95%" }}>
      <HomeSlider />
    </Container>
  );
};

export default Home;
