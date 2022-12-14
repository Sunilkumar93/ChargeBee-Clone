import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  Image,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Logo = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      
    </svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


export default function Footer() {
  return (
    <Box
      bg="white"
      color="black"
      >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2,lg:4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader   >Product &#62;</ListHeader>
            <Link href={'#'}>Subscription Management</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg="blue"
                ml={2}
                >
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Recurring Billing and Invoicing</Link>
            <Link href={'#'}>Recurring Payments</Link>
            <Link href={'#'}>Accounting and Taxes</Link>
            <Link href={'#'}>SaaS Reporting</Link>
            <Link href={'#'}>Enterprise Billing</Link>
            <Link href={'#'}>Integrations</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >Help & Support &#62;</ListHeader>
            <Link href={'#'}>Security</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Status</Link>
            <Link href={'#'}>Product Documentation</Link>
            <Link href={'#'}>API Documentation</Link>
            <Link href={'#'}>Supported Payment Gateways</Link>
            <Link href={'#'}>Sitemap</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >Resources &#62;</ListHeader>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Compare Payment Gateways</Link>
            <Link href={'#'}>Tackling Payment Failures</Link>
            <Link href={'#'}>Enterprise Billing Guide</Link>
            <Link href={'#'}>Webinars</Link>
            <Link href={'#'}>Events</Link>
            <Link href={'#'}>Glossaries</Link>
            <Link href={'#'}>Subscription Academy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >Company &#62;</ListHeader>
            <Link href={'#'}>Customers</Link>
            <Link href={'#'}>Partners</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Brand Guidelines</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box>
        <Flex  pb="10%" px="5%" justifyContent="space-between">
          <Box ><Image  w="30%" borderRadius="20%" src="https://cyclr.com/wp-content/uploads/2018/10/chargebee-logo.png" alt="footer-logo"/></Box>
          <Flex gap={4}>
          <button><InstagramIcon/></button>
          <button><FacebookIcon/></button>
          <button><TwitterIcon/></button>
          <button><YouTubeIcon/></button>
          <button><LinkedInIcon/></button>
          </Flex>
        </Flex>
        
      </Box>
      {/* <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
           
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
           
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Chakra Templates. All rights reserved
        </Text>
      </Box> */}
    </Box>
  );
}