import { Box, Flex, Show, Link } from "@chakra-ui/react";

import React, { useState } from "react";

const Scrolltab = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const checkScroll = () => {
    if (window.scrollY >= 1400 && window.scrollY <= 4100) {
      setIsSticky(true);
      if (window.scrollY <= 1950) {
        setActiveLink(1);
      } else if (window.scrollY <= 2500) {
        setActiveLink(2);
      } else if (window.scrollY <= 3050) {
        setActiveLink(3);
      } else if (window.scrollY <= 3600) {
        setActiveLink(4);
      } else {
        setActiveLink(5);
      }
    } else {
      setIsSticky(false);
      setActiveLink(null);
    }
  };
  window.addEventListener("scroll", checkScroll);
  return (
    <Box
      w={{ md: "100%", lg: "90%" }}
      m="auto"
      position={isSticky ? "sticky" : "static"}
      top="65px"
      backdropFilter="auto"
      backdropBlur="8px"
      zIndex="10"
      py={5}
    >
      <Show above="md">
        <Box w="100%" m="auto">
          <Flex w="100%" justifyContent="space-between">
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(1)}
              borderBottom={
                activeLink === 1 ? "4px solid blue" : "4px solid rgba(0,0,0,0)"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" href="#SubscriptionTab">
                Subscription Automation
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(2)}
              borderBottom={
                activeLink === 2 ? "4px solid blue" : "4px solid rgba(0,0,0,0)"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" href="#BillingTab">
                Billing Experiments
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(3)}
              borderBottom={
                activeLink === 3 ? "4px solid blue" : "4px solid rgba(0,0,0,0)"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" href="#RevenueTab">
                Revenue Intelligence
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => {
                setActiveLink(4);
              }}
              borderBottom={
                activeLink === 4 ? "4px solid blue" : "4px solid rgba(0,0,0,0)"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" href="#ExtensibleTab">
                Extensible Platform
              </Link>
            </Box>
            <Box
              py="3"
              px="3"
              onClick={() => setActiveLink(5)}
              borderBottom={
                activeLink === 5 ? "4px solid blue" : "4px solid rgba(0,0,0,0)"
              }
              _hover={{ borderBottom: "4px solid blue", color: "blue" }}
            >
              <Link textDecoration="none" href="#EnterpriseTab">
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
