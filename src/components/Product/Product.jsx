import { Box, Flex, Grid, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Product = () => {
  return (
    <Box w="98vw" px={10} py={35}>
      <Grid templateColumns="repeat(5,1fr)" gap={3} alignItems="start">
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              Subscription Management
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
              Overview
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
              Create & Manage Plans
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
              Entitlements
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
              Pricing Management
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
              Handle Trial Subscriptions
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
              Customer Self-service Portal
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
              Mobile Solutions
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              Billing Automation
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
              Overview
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
              Usage Based Billing
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
              Invoicing Automation
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
              Quotes
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
              Proration
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              Recurring Payments
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
              Overview
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
              Multiple Payment Methods
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
              Multiple Payment Gateways
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
              Smart Dunning
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
              Chargeback Management
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
              Checkout Experience
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
              Proration
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              Accounting & Taxes
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
              Overview
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
              Revenue Recognition
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
              Manage Sales Tax
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
              One-Click Reconciliation
            </Text>
          </Box>
          <Box>
            <Heading as="h6" fontSize="14px">
              Reporting & Analytics
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
              Overview
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
              Deferred Revenue Reporting
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="start">
          <Box>
            <Heading as="h6" fontSize="14px">
              Customer Retention
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
              Tackle churn
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
              Retention Toolbox
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
              Billing + Retention
            </Text>
          </Box>
        </VStack>
      </Grid>
      <VStack alignItems="start" mt="20px">
        <Box>
          <Text>Supports:</Text>
        </Box>
        <Box>
          <Text>Preferred Partners</Text>
        </Box>
        <Flex gap={1}>
          <Link href="#" textDecoration="underline"> Stripe,</Link>
          <Link href="#" textDecoration="underline">Braintree, </Link>
          <Link href="#" textDecoration="underline">Checkout.com, </Link>
          <Link href="#" textDecoration="underline">GoCardless, </Link>
          <Link href="#" textDecoration="underline">Paypal,</Link>
          <Text  textDecoration="none">and</Text>
          <Link href="#" textDecoration="underline">27 other payment gateways.</Link>
        </Flex>
        <Flex gap={1}>
          <Text textDecoration="none">Seamless integration with </Text>
          <Link href="#" textDecoration="underline"> Xero,</Link>
          <Link href="#" textDecoration="underline"> QuickBooks </Link>
          <Link href="#" textDecoration="underline">Zendesk, </Link>
          <Link href="#" textDecoration="underline"> Salesforce </Link>
          <Link href="#" textDecoration="underline">+ 18 more.</Link>
        </Flex>
        <Box><Text color="blue"fontWeight={600} fontSize="20px" >Explore all features {">"}</Text></Box>
      </VStack>
    </Box>
  );
};

export default Product;
