import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";

const Trust = () => {
  return (
    <Box w={{ base: "100%", lg: "80%" }} m="auto">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box w={{ base: "25%", lg: "15%" }}>
          <Image
            src="https://webstatic.chargebee.com/assets/web/543/images/g2-badge-collection/chargebee-leader-subscription-management-g2-spring.svg"
            alt="img"
          />
        </Box>
        <VStack alignItems="start" gap={2} w={{ base: "100%", md: "65%" }}>
          <Box>
            <Heading fontSize="2.25rem">
              Trusted partner in 4500+ growth stories...
            </Heading>
          </Box>
          <Grid
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            }}
          >
            <Stack>
              <Box>
                <Heading>94%</Heading>
              </Box>
              <Box>
                <Text>Most likely to recommend</Text>
              </Box>
            </Stack>
            <Stack>
              <Box>
                <Heading>1.3</Heading>
              </Box>
              <Box>
                <Text>Avg. months to go live</Text>
              </Box>
            </Stack>
            <Stack>
              <Box>
                <Heading>#1</Heading>
              </Box>
              <Box>
                <Text>Subscription Billing Software</Text>
              </Box>
            </Stack>
            <Stack>
              <Box>
                <Heading>98%</Heading>
              </Box>
              <Box>
                <Text>Rated 4+ stars on 5</Text>
              </Box>
            </Stack>
          </Grid>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Trust;
