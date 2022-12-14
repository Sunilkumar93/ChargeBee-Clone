import { ArrowForwardIcon, CheckCircleIcon, CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import React from "react";

import styles from "./Pricestyles.module.css";

const Price = () => {
  let mystyle = {
    background:
      "linear-gradient(100.96deg, #4300A3 33.34%, #6100BB 71.36%, #A700F1 104.8%)",
    paddingTop: "100px",
    paddingBottom: "20px",
  };
  return (
    <>
      <div style={mystyle}>
        <Box maxWidth="1100px" margin="auto" textAlign="left" color="white">
          <Heading fontSize="64px" mb="0px">
            Find a plan that's right for you
          </Heading>
          <Flex mb="40px">
            <Text>
              Or simply leverage the expertise of our consultation team.
            </Text>
            <Text
              border="1px solid white"
              borderRadius="16px"
              fontSize="10px"
              pl="10"
              pr="10"
              pt="7"
            >
              <Center letterSpacing="3px"> TALK TO US </Center>
            </Text>
          </Flex>
          <div id={styles.btncontain}>
            <div class={styles.container}>
              <div class={styles.one}>ANNUAL</div>
              <div class={styles.one}>MONTHLY</div>
            </div>
            <div class={styles.container1}>
              <div class={styles.one}>USD</div>
              <div class={styles.one}>EUR</div>
              <div class={styles.one}>GBP</div>
              <div class={styles.one}>AUD</div>
              <div class={styles.one}>CAD</div>
              <div class={styles.one}>INR</div>
            </div>
          </div>
          <Flex>
            <Box>
              <Heading>Launch</Heading>
              <Text>
                For early-stage startups that want to spend more time developing
                and less on manual operations.
              </Text>
            </Box>
            <Box>
              <Heading>Rise</Heading>
              <Text>
                For agile startups that want to grow their revenue with quick
                experiments and data-driven decision making.
              </Text>
            </Box>
            <Box>
              <Heading>Scale</Heading>
              <Text>
                For fast-growth scaleups that want to grow by maximizing
                efficiencies in their revenue operations.
              </Text>
            </Box>
            <Box>
              <Heading>Enterprise</Heading>
              <Text>
                For large businesses looking for enterprise-class compliance
                while diversifying revenue streams.
              </Text>
            </Box>
          </Flex>
        </Box>
      </div>
      <Box background="#f8f8f8" marginBottom="100px">
        <Flex maxWidth="1100px" margin="auto" gap="30">
          <Box w="250px" textAlign="left">
            <Heading as="h4" color="#4300A3">
              INR
            </Heading>
            <Heading as="h1">0/mo</Heading>
            <p>
              for your first INR 80L in revenue
              <span>What happens when I hit INR 80L?</span>
            </p>
            <Box h="60px" w="200px" bg="#4300A3" color="white" borderRadius="5">
              <Text padding="16px">
                <Center>Get started for free</Center>
              </Text>
              <ArrowForwardIcon color="white" />
            </Box>
            <Text fontSize="18px" fontWeight="bold" color="grey.400">
              All you need to get started
            </Text>
            <Box lineHeight="0">
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Secure checkout (.js and hosted)</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Support up to 6 pricing models</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Issue credit notes</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Dunning</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>A/R aging report</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Customer portal</Text>
              </Box>
            </Box>
          </Box>
          <Box w="250px" textAlign="left">
            <Heading as="h4" color="#4300A3">
              INR
            </Heading>
            <Heading as="h1">0/mo</Heading>
            <p>
              for your first INR 80L in revenue
              <span>What happens when I hit INR 80L?</span>
            </p>
            <Box h="60px" w="200px" bg="#4300A3" color="white" borderRadius="5">
              <Text padding="16px">
                <Center>Get started for free</Center>
              </Text>
              <ArrowForwardIcon color="white" />
            </Box>
            <Text fontSize="18px" fontWeight="bold" color="grey.400">
              {" "}
              All you need to get started
            </Text>
            <Box lineHeight="0">
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Secure checkout (.js and hosted)</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Support up to 6 pricing models</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Issue credit notes</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Dunning</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>A/R aging report</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Customer portal</Text>
              </Box>
            </Box>
          </Box>
          <Box w="250px" textAlign="left">
            <Heading as="h4" color="#4300A3">
              INR
            </Heading>
            <Heading as="h1">0/mo</Heading>
            <p>
              for your first INR 80L in revenue
              <span>What happens when I hit INR 80L?</span>
            </p>
            <Box h="60px" w="200px" bg="#4300A3" color="white" borderRadius="5">
              <Text padding="16px">
                <Center>Get started for free</Center>
              </Text>
              <ArrowForwardIcon color="white" />
            </Box>
            <Text fontSize="18px" fontWeight="bold" color="grey.400">
              {" "}
              All you need to get started
            </Text>
            <Box lineHeight="0">
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Secure checkout (.js and hosted)</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Support up to 6 pricing models</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Issue credit notes</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Dunning</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>A/R aging report</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Customer portal</Text>
              </Box>
            </Box>
          </Box>
          <Box w="250px" textAlign="left">
            <Heading as="h4" color="#4300A3">
              INR
            </Heading>
            <Heading as="h1">0/mo</Heading>
            <p>
              for your first INR 80L in revenue
              <span>What happens when I hit INR 80L?</span>
            </p>
            <Box h="60px" w="200px" bg="#4300A3" color="white" borderRadius="5">
              <Text padding="16px">
                <Center>Get started for free</Center>
              </Text>
              <ArrowForwardIcon color="white" />
            </Box>
            <Text fontSize="18px" fontWeight="bold" color="grey.400">
              {" "}
              All you need to get started
            </Text>
            <Box lineHeight="0">
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Secure checkout (.js and hosted)</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Support up to 6 pricing models</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Issue credit notes</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Dunning</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>A/R aging report</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="3">
                <Box>
                  <CheckCircleIcon color="#4300A3" />
                </Box>
                <Text>Customer portal</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Flex gap="60px" maxWidth="1100px" margin="auto">
        <Box>
          <Image
            src="https://webstatic.chargebee.com/assets/web/543/images/pricings/plan.svg"
            w="500px"
          />
        </Box>
        <Box w="600px" alignContent="" textAlign="left">
          <Heading> For Early Stage Startups</Heading>
          <Text>
            Are you a newly launched business making less than USD 100K in
            revenue? Chargebee for Startups is meant for you. Focus on building
            and launching your product, while we take care of your billing.
          </Text>
          <Box
            h="60px"
            w="150px"
            bg="linear-gradient(100.96deg, #4300A3 33.34%, #6100BB 71.36%, #A700F1 104.8%)"
            color="white"
            borderRadius="5"
          >
            <Text padding="16px">
              <Center>Read More</Center>
            </Text>
            <ArrowForwardIcon color="white" />
          </Box>
        </Box>
      </Flex>
      <Box background="#f8f8f8" marginBottom="100px">
        <Flex gap="60px" maxWidth="1100px" margin="auto">
          <Box width="500px" textAlign="left">
            <Heading>
              We've helped thousands of subscription businesses streamline their
              billing workflow
            </Heading>
            <Text>
              Switching to Chargebee has been a big upgrade for us. They are
              solving the problems we'd have a year from now.
            </Text>
            <Flex gap="20px">
              <Box>
                <Image
                  src="https://webstatic.chargebee.com/assets/web/543/images/case-study/makespace/cto.png"
                  w="100px"
                  h="100px"
                  borderRadius="50%"
                />
              </Box>
              <Box textAlign="left">
                <Heading>Matthew Busel</Heading>
                <Text>Product Manager, MakeSpace</Text>
              </Box>
            </Flex>
            <Flex gap="20px" mt="20">
              <Image
                src="https://webstatic.chargebee.com/assets/web/543/images/case-study/getaccept/ga-logo-black.png"
                w="110px"
                h="28px"
              />
              <Image
                src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/sharetribe.svg"
                w="110px"
                h="28px"
              />
              <Image
                src="https://webstatic.chargebee.com/assets/web/543/images/case-study/cloudguru/logo.svg"
                w="110px"
                h="28px"
              />
              <Image
                src="https://webstatic.chargebee.com/assets/web/543/images/case-study/userlane/userlane.png"
                w="110px"
                h="28px"
              />
            </Flex>
          </Box>
          <Box w="500px">
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  border="0px"
                  borderBottom="1px solid black"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Enter amount" />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Price;
