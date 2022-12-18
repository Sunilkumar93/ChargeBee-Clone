import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";

const Resources = () => {
  return (
    <Box px={1} py="1" w="99vw">
      <Box>
        <Grid templateColumns="repeat(3,1fr)">
          <Box py={10} px={4} bg="red.100" _hover={{ cursor: "pointer" }}>
            <Box mb={3}>
              <Text>
                Learn everything that falls under the umbrella of subscriptions.
              </Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="red.500">
                Learning Hub {">"}
              </Text>
            </Box>
          </Box>
          <Box
            py={10}
            px={4}
            bg="gray.100"
            _hover={{ cursor: "pointer", bg: "gray.200" }}
          >
            <Box mb={3}>
              <Text>
                Read our ever-growing stories on SaaS, and get all the growth
                insights you need.
              </Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="blue">
                Chargebee Blog {">"}
              </Text>
            </Box>
          </Box>
          <Box
            py={10}
            px={4}
            bg="gray.100"
            _hover={{ cursor: "pointer", bg: "gray.200" }}
          >
            <Box mb={3}>
              <Text>
                A quick overview of Chargebee to help you understand and
                implement it.
              </Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="blue">
                Chargebee Docs {">"}
              </Text>
            </Box>
          </Box>
          <Box
            py={10}
            px={4}
            bg="gray.100"
            _hover={{ cursor: "pointer", bg: "gray.200" }}
          >
            <Box mb={3}>
              <Text>
                Chargebee's in-house team of implementation experts is here to
                make sure you go live with your Chargebee site at lightning-fast
                speed.
              </Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="blue">
                Professional Services & Implementation "{">"}
              </Text>
            </Box>
          </Box>
          <Box
            py={10}
            px={4}
            bg="gray.100"
            _hover={{ cursor: "pointer", bg: "gray.200" }}
          >
            <Box mb={3}>
              <Text>
                Learn to unlock all revenue secrets to secure hyper-growth for
                your business. Access free certifications, courses, and expert
                masterclasses.
              </Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="blue">
                Subscription Academy {">"}
              </Text>
            </Box>
          </Box>
          <Box
            py={10}
            px={4}
            bg="gray.100"
            _hover={{ cursor: "pointer", bg: "gray.200" }}
          >
            <Box mb={3}>
              <Text>
                Learn what top industry analyst firms are saying about
                Chargebee.
              </Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="blue">
                Industry Reports {">"}
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Resources;
