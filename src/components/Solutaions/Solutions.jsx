import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Solutions = () => {
  return (
    <Box w="98vw" px={10} py={35}>
      <Grid templateColumns="repeat(6,1fr)" gap={3} alignItems="start">
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              By Role
            </Heading>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Finance
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Sales
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              RevOps
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              By Industry
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              B2B SaaS
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              eCommerce
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              E-learning
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Publishing
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Video & OTT
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              By Strategy
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Roll Out New Pricing
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Expand Globally
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Move Upmarket
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Shift to Subscriptions
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              By Business Size
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Startup
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              ScaleUp
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Enterprise
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              By Business Model
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Self-serve
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Sales-driven
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              By Geography
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Europe
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              Australia
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="16px"
              color="blue"
              _hover={{
                ml: "5px",
              }}
            >
              India
            </Text>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Solutions;
