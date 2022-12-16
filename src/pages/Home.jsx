import { Container } from "@chakra-ui/react";
import React from "react";
import HomeSlider from "../components/home/HomeSlider";

const Home = () => {
  return (
    <Container mt={{ base: "-240px", md: "120px", lg: "100px" }} px="10px" maxW={{ base: "95%", md: "90%", lg: "95%" }}>
      <HomeSlider />
    </Container>
  );
};

export default Home;
