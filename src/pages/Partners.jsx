import React from 'react';
import { Box,Text,Input,Button, GridItem,Grid,FormControl,FormLabel } from '@chakra-ui/react'
const Partners = () => {
  return (

<Box>
    <Box 
     style={{
      width:"100%",
      height:"65px",
      display:"flex",
      justifyContent:"center",
      alignItems:'center',
      gap:'40px',
      backgroundColor:"#651Aba",
      color:'white'
  }}

    >
       <Box> <Text fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} as='b'>Become a Partner</Text></Box>
       <Box> <Text fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} as='b'>Partner FAQ</Text></Box>
       <Box> <Text fontSize={{base: '1xl', md: '2xl', lg: '3xl' }} as='b'>Market Place</Text></Box>
 </Box>
 <Box  style={{
    width:"100%",
     backgroundColor:"#4300a3",
  
    }}  
    height="auto">
   
 <Grid 
     templateRows={{
      sm: "repeat(1, 1fr)",
      md: "repeat(1, 1fr)",
      lg: "repeat(1, 1fr)"
    }}

    templateColumns={{
      sm: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(2, 1fr)"
    }}
    gap='50px'
    padding={{ base: '20px', md: '20px', lg: '60px' }}
    >
    
         <GridItem padding={{ base: '5px', md: '5px', lg: '36px' }} width={{ base: '100%', md: '100%', lg: '85%' }} mt='50px' color= "#ffffff">
              <Box  w='max-content' style={{ borderRadius: '20px',mb: "1cm",backgroundColor:" #522ec4"}}>
              <Text pl="14px" pr="14px" mb='12px' style={{ color: "#ffffff",border:'none'}}>Chargebee Partner Programs</Text>
              </Box>
              <Box><Text fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} fontWeight='700' align='left' lineHeight='55px'>Let's Work Together</Text></Box>
              <Text align='left' mt='20px' fontSize='20px'>Becoming a Chargebee partner enables access to the world of subscriptions, bringing increased value to merchants, merchant aggregators and marketplaces around the world. Join our Partner Ecosystem today.</Text>
        </GridItem>

       <GridItem padding='40px' width='90%' height={{ base:'2050px',small:'1950px',md:'2250px',lg:'1450px' ,xl: '1650px' }} borderRadius='6px' mt='20px' bg='white'  boxShadow='dark-lg'>
            <Text as='b' align='left'>Drop your details in to connect with our Partnership Team</Text>
            <FormControl isRequired>
            <FormLabel fontWeight='400' align='left'>First Name</FormLabel>
            <Input size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Last Name</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Business Email</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Job Title</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Company name</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Country/Region</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Phone number</FormLabel>
            <Box style={{display:'flex',gap:'8px'}}> 
              <select name="" id="" style={{border:'1px solid'}}>
                <option value="">India</option>
                <option value="">United State</option> 
                <option value="">Brazil</option>
                <option value="">Russia</option>
                <option value="">Japan</option>
              </select>
              <Input  size='sm'  style={{border:'1px solid'}}/>
            </Box>
          
            <FormLabel fontWeight='400' align='left'>Number of employees*</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Have you worked with Chargebee in the past? *</FormLabel>
            <Input  size='sm'  style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>How do you envision working with Chargebee?</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>How do you envision working with Chargebee?</FormLabel>
            <Input size='sm'  style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>What type of organizations do you work with?*</FormLabel>
            <Input  size='sm'  style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>Do you have mutual customers with Chargebee? If so, who?</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <FormLabel fontWeight='400' align='left'>What does a successful partnership with Chargebee look like for you?*</FormLabel>
            <Input  size='sm' style={{border:'1px solid'}}/>
            <Button colorScheme='blue' color='white' mt='20px' borderRadius='0px'>Become a Partner</Button>
           
            </FormControl>
            <Text fontSize='12px' align='left'>Once you fill out this information, our Partnership team will get back to you shortly.</Text>
       </GridItem>
       </Grid>
        </Box>
       
    </Box>
    

  )
}

export default Partners