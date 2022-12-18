import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import React from "react";

const EnterpriseTab = () => {
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
            Promise Secure Subscription Experiences
          </Heading>
        </Box>
        <Box>
          <Text>
            Stay compliant with the latest taxation and privacy regulations to
            enter and scale new markets with agility.
          </Text>
        </Box>
        <VStack gap="1" alignItems="start">
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>SOC1 & SOC 2 Compliant</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>GDPR Ready</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>PCI-DSS Level 1</Text>
            </Box>
          </Flex>
          <Flex gap="3">
            <Box>
              <CheckCircleIcon color="blue" />
            </Box>
            <Box>
              <Text fontWeight={500}>99.9% Uptime</Text>
            </Box>
          </Flex>
        </VStack>
        <Flex gap="1" alignItems="center" color="blue">
          <Link textDecoration="none" to="#">
            Learn More
          </Link>
          <ExternalLinkIcon />
        </Flex>
      </VStack>
      <Box w={{ base: "100%", md: "50%", lg: "40%" }} h="100%">
        <Image
          w="100%"
          h="90%"
          src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/security.png"
          alit="image"
        />
      </Box>
    </Flex>
  );
};

export default EnterpriseTab;
