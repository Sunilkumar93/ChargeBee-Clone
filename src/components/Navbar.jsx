import React from "react";
import { Link } from "react-router-dom";
import { Box, Hide, Image, Show } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <>
    <Box fontSize="17px"   position="fixed"  top="0" width="100%"    alignItems="center" bg="white" color="black" display="flex"  px='20px' justifyContent="space-between" zIndex="999"     >
      
      
      <Box  display="flex" alignItems="center"  gap="5"   >
          <Link to="/"><Box w={{base:"100px",md:"150px"}}><Image      src="https://www.orderdesk.com/wp-content/uploads/2022/05/logo-chargebee.png" alt="navbar_logo" /></Box></Link>
          <Hide below="md">
          <Link to="/"><span>Product</span></Link>
          <Link to="/price">Pricing</Link>
          <Link to="/"><span>Solutions</span></Link>
          <Link to="/customers">Customers</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/partners">Partners</Link>
          </Hide>
      </Box>
      <Box  display="flex" alignItems="center" gap="5"   >
        <Hide below="md">
        <span >English</span>
        <Link to="/login"><LockIcon  style={{margin:"auto 5px",color:"#ff7846"}} />Login</Link>
        <Link to="/demo"><button className="o" style={{padding:"5px 10px",color:"white"}} >Get a Demo &#62;</button></Link>
        </Hide>

      </Box>
  

</Box>
    </>
  );
};

export default Navbar;
