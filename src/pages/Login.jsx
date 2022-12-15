import { Box, Flex, Grid, Heading, Hide, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Box pt="110px" pb="100px" bg="white" color="black" >
      <Grid gridTemplateColumns={{base:"1fr",md:"1fr 1fr"}} className='login_outer' width={{base:"90vw",md:"70vw",lg:"60vw"}}  m="auto"  boxShadow='dark-lg'  rounded='md' bg='white' >
        <Show above="md">
          <Box m="40px 20px 40px 40px" >
              <Box><Image p="10px" borderRadius="12px" w="15%" bg="#6200ea" src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logo-white.svg" /></Box>
              <Text color="gray" fontSize="14px" mt="10px"  letterSpacing="1px">ANNOUNCING SUMMER 2022 PRODUCT RELEASE</Text>
              <Text mt="10px" >Monetize Effectively to Tackle Market Turbulence</Text>
              <Box  display="flex"   mt="20px">
                <Box w="50%"><Image w="90%" src="https://d190vb4jo83j4z.cloudfront.net/Login_Page_Banner_Aug_22.png" alt="login_logo"/></Box>
                
                <Box w="50%"><Text color="gray">Chargebee's Summer 2022 Release brings you better monetization capabilities that help you seize revenue opportunities by improving customer lifetime value, managing cashflows better, and achieving topline growth.</Text>
                <Link mt="10px" to="#" >See what's new across our products</Link>
                </Box>
              </Box>
          </Box>
          </Show>
          <Box bg="red" m="40px 40px 40px 20px" >2</Box>
      </Grid>
    </Box>
  )
}

export default Login