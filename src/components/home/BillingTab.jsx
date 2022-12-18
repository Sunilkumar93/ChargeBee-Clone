import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import React from "react";

const BillingTab = () => {
  return (
    <Flex
      id="BillingTab"
      w={{ base: "100%", lg: "85%" }}
      m="auto"
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      h={{ base: "700px", md: "400px", lg: "500px" }}
    >
      <VStack
        w={{ base: "100%", md: "35%", lg: "30%" }}
        alignItems="start"
        gap={3}
      >
        <Box>
          <Heading fontSize="1.375rem" fontWeight={700} color="#00000a">
            Align Billing Workflow with GTM Strategy
          </Heading>
        </Box>
        <Box>
          <Text>
            Adjust price structures, product bundles, discount management, and
            recovery processes to maximize revenue.
          </Text>
        </Box>
        <VStack gap="1" alignItems="start">
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Price-modeling</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Usage-based Billing</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Plan & Product Catalog</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>480+ Billing Scenarios</Text>
            </Box>
          </Flex>
        </VStack>
        <Flex gap="1" alignItems="center" color="blue">
          <Link textDecoration="none" to="#">
            Learn More
          </Link>
          <ExternalLinkIcon id="RevenueTab" />
        </Flex>
      </VStack>
      <Box w={{ base: "100%", md: "50%", lg: "auto" }}>
        <Image
          src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/billing-experiments.svg"
          alit="image"
        />
      </Box>
    </Flex>
  );
};

export default BillingTab;
