import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import React from "react";
const ExtensibleTab = () => {
  return (
    <Flex
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
            Scale Revenue Stack for Each Stage of Growth
          </Heading>
        </Box>
        <Box>
          <Text>
            Upgrade finance, accounting, CRM, and more, on the revenue engine
            that scales with you.
          </Text>
        </Box>
        <VStack gap="1" alignItems="start">
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Sales, Revenue & Marketing</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Accounting & Finance</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Support & Engagement</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>Inventory & Logistics</Text>
            </Box>
          </Flex>
        </VStack>
        <Flex gap="1" alignItems="center" color="blue">
          <Link textDecoration="none" to="#">
            Learn More
          </Link>
          <ExternalLinkIcon id="EnterpriseTab" />
        </Flex>
      </VStack>
      <Box w={{ base: "100%", md: "50%", lg: "auto" }}>
        <Image
          src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/integration.svg"
          alit="image"
        />
      </Box>
    </Flex>
  );
};

export default ExtensibleTab;
