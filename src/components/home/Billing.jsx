import React from "react";
import {
  Box,
  Flex,
  Heading,
  Show,
  Text,
  Grid,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";

import "./Billing.css";

const Billing = () => {
  return (
    <Box w="full">
      <Flex gap={7} flexDir={{ base: "column", lg: "row" }}>
        <Box w={{ base: "100%", md: "80%", lg: "30%" }}>
          <VStack
            pr={{ base: "0", lg: "80px" }}
            alignItems="start"
            gap="5"
            position="relative"
          >
            <Box>
              <Heading>Designed to go Beyond Billing.</Heading>
            </Box>
            <Box>
              <Text>
                Get the freedom to experiment, launch, and scale strategies as
                fast as you can think of them.
              </Text>
            </Box>
            <Show above="lg">
              <Box
                boxSize={250}
                bgGradient="radial(63.23% 63.23% at 50% 50%,#5701b1 0,#ce91ff 61.99%,#fff 100%)"
                transform="rotate(20deg) "
                transition=".3s ease-in-out"
                borderRadius={50}
              ></Box>
              <Box
                boxSize={130}
                bgGradient="radial(66.26% 66.26% at 50% 50%,rgba(253,248,244,.8) 0,rgba(225,225,225,.608333) 84.9%,rgba(253,248,244,.8) 100%)"
                transform="rotate(20deg) "
                transition=".3s ease-in-out"
                position="absolute"
                top="60%"
                left="3"
                borderRadius={15}
              ></Box>
            </Show>
          </VStack>
        </Box>
        <Box w={{ base: "full", lg: "70%" }}>
          <Grid
            templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(2,1fr)" }}
            gap="7"
            overflow="scroll"
            className="hideScrollbar"
          >
            <VStack alignItems="start" gap="2" boxSize={250}>
              <Box>
                <Image
                  src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg"
                  alt="logo"
                />
              </Box>
              <Box>
                <Heading as="h3" fontSize="1rem">
                  Rethink Pricing
                </Heading>
              </Box>
              <Box>
                <Text color="#64648c" fontSize="1rem">
                  Pricing models. Grandfathering. One-click roll-back. Doesn't
                  get easier!
                </Text>
              </Box>
              <Box alignSelf="end">
                <Link textDecoration="none" color="blue">
                  Learn more{" "}
                </Link>
              </Box>
            </VStack>
            <VStack alignItems="start" gap="2" boxSize={250}>
              <Box>
                <Image
                  src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg"
                  alt="logo"
                />
              </Box>
              <Box>
                <Heading as="h3" fontSize="1rem">
                  Rethink Pricing
                </Heading>
              </Box>
              <Box>
                <Text color="#64648c" fontSize="1rem">
                  Pricing models. Grandfathering. One-click roll-back. Doesn't
                  get easier!
                </Text>
              </Box>
              <Box alignSelf="end">
                <Link textDecoration="none" color="blue">
                  Learn more{" "}
                </Link>
              </Box>
            </VStack>
            <VStack alignItems="start" gap="2" boxSize={250}>
              <Box>
                <Image
                  src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg"
                  alt="logo"
                />
              </Box>
              <Box>
                <Heading as="h3" fontSize="1rem">
                  Rethink Pricing
                </Heading>
              </Box>
              <Box>
                <Text color="#64648c" fontSize="1rem">
                  Pricing models. Grandfathering. One-click roll-back. Doesn't
                  get easier!
                </Text>
              </Box>
              <Box alignSelf="end">
                <Link textDecoration="none" color="blue">
                  Learn more{" "}
                </Link>
              </Box>
            </VStack>
            <VStack alignItems="start" gap="2" boxSize={250}>
              <Box>
                <Image
                  src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg"
                  alt="logo"
                />
              </Box>
              <Box>
                <Heading as="h3" fontSize="1rem">
                  Rethink Pricing
                </Heading>
              </Box>
              <Box>
                <Text color="#64648c" fontSize="1rem">
                  Pricing models. Grandfathering. One-click roll-back. Doesn't
                  get easier!
                </Text>
              </Box>
              <Box alignSelf="end">
                <Link textDecoration="none" color="blue">
                  Learn more{" "}
                </Link>
              </Box>
            </VStack>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Billing;
