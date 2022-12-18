import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Billing from "../components/home/Billing";
import BillingTab from "../components/home/BillingTab";
import EnterpriseTab from "../components/home/EnterpriseTab";
import ExtensibleTab from "../components/home/ExtensibleTab";
import HomeSlider from "../components/home/HomeSlider";
import LogoSlider from "../components/home/LogoSlider";
import RevenueTab from "../components/home/RevenueTab";
import Scrolltab from "../components/home/Scrolltab";
import SubscriptionTab from "../components/home/SubscriptionTab";
import Trust from "../components/home/Trust";

const Home = () => {
  return (
    <Container
      scrollBehavior="smooth"
      display="flex"
      flexDirection="column"
      mt={{ base: "-240px", md: "120px", lg: "100px" }}
      gap={"55px"}
      px="10px"
      maxW={{ base: "95%", md: "90%", lg: "95%" }}
    >
      <HomeSlider />
      <LogoSlider />
      <Billing />
      <VStack
        id="SubscriptionTab"
        m="auto"
        alignItems="start"
        w={{ base: "100%", lg: "50%" }}
        px="6"
        mt="15px"
      >
        <Heading>Streamline Revenue Operations</Heading>
        <Text color="#64648c" textAlign={{ base: "start", lg: "center" }}>
          Chargebee automates the lead-to-ledger workflow across your revenue
          stack, so you can dream, deploy, and enjoy the breeze. While the MRR
          just keeps rolling.
        </Text>
      </VStack>
      <Scrolltab />
      <SubscriptionTab />
      <BillingTab />
      <RevenueTab />
      <ExtensibleTab />
      <EnterpriseTab />
      <Trust />
    </Container>
  );
};

export default Home;
