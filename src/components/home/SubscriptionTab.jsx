import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import React from "react";
const SubscriptionTab = () => {
  return (
    <Flex
      id="SubscriptionTab"
      w={{ base: "100%", lg: "85%" }}
      m="auto"
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      h={{ base: "700px", md: "500px", lg: "500px" }}
    >
      <VStack
        w={{ base: "100%", md: "35%", lg: "30%" }}
        alignItems="start"
        gap={3}
      >
        <Box>
          <Heading fontSize="1.375rem" fontWeight={700} color="#00000a">
            Automate the Order-to-Revenue Lifecycle
          </Heading>
        </Box>
        <Box>
          <Text>
            Collect recurring payments and automate your subscription billing
            logic - from checkout to reconciliation.
          </Text>
        </Box>
        <VStack gap="1" alignItems="start">
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Quote-to-Cash</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Trial Management</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Tax Management</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Lifecycle Automation</Text>
            </Box>
          </Flex>
        </VStack>
        <Flex gap="1" alignItems="center" color="blue">
          <Link textDecoration="none" to="#">
            Learn More
          </Link>
          <ExternalLinkIcon id="BillingTab" />
        </Flex>
      </VStack>
      <Box w={{ base: "100%", md: "50%", lg: "auto" }}>
        <Image
          src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/subscription-automation.svg"
          alit="image"
        />
      </Box>
    </Flex>
  );
};

export default SubscriptionTab;
