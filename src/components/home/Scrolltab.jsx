import { Box, Flex, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Scrolltab = () => {
  const [activeLink, setActiveLink] = useState(null);
  const checkScroll = () => {
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", checkScroll);
  return (
    <Box w="full" position="sticky" top="150px" zIndex="10">
      <Show above="lg">
        <Box w="90%" m="auto">
          <Flex justifyContent="space-around">
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(1)}
              borderBottom={
                activeLink === 1 ? "4px solid blue" : "4px solid white"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" to="#">
                Subscription Automation
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(2)}
              borderBottom={
                activeLink === 2 ? "4px solid blue" : "4px solid white"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" to="#">
                Billing Experiments
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(3)}
              borderBottom={
                activeLink === 3 ? "4px solid blue" : "4px solid white"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" to="#">
                Revenue Intelligence
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(4)}
              borderBottom={
                activeLink === 4 ? "4px solid blue" : "4px solid white"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" to="#">
                Extensible Platform
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(5)}
              borderBottom={
                activeLink === 5 ? "4px solid blue" : "4px solid white"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" to="#">
                Enterprise-Grade Security
              </Link>
            </Box>
          </Flex>
        </Box>
      </Show>
    </Box>
  );
};

export default Scrolltab;
