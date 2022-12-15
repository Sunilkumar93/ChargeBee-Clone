import { Link } from "react-router-dom";
import { Box, Hide, Image, Show,Button } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {

  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = React.useState("right");
  

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
 

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
      <Show below="md">
      <Box m="auto" display="flex" alignItems="center" justifyContent="center" onClick={() => handleClick(size)}  >
                     <HamburgerIcon position="fixed"  right="20px"   key={size}   fontWeight="bold" h={8} w={8} color="black"  />
                     {/* ----------------------------- */}
                     <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton border="2px solid #fb982f" bg="black" color="#fff" />
          <DrawerHeader ></DrawerHeader>
          <DrawerBody>
          <Box    className='navbar_right' flexGrow="3"  >
              <Button bg="black" as="a" href="https://drive.google.com/uc?id=1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo&export=download"  className='side' download onClick={onClose} >RESUME &#8595;
              </Button>

              <Link to="home" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose}  className='side'>Home</p></Link>

              <Link to="about" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side'>About</p></Link>

              <Link to="education" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side'>Education</p></Link>

              <Link to="skill" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side'>Skills</p></Link>

              <Link to="projects" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side' >Projects</p></Link>

              <Link to="github" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side'>Github</p></Link>

              <Link to="achievements" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side' >Achievements</p></Link>

              <Link to="contact" duration={2000} onClick={onClose}    spy={true}    smooth={true}    ><p onClick={onClose} className='side'>Contact</p></Link>

            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
                   </Box>
      </Show>
  

</Box>
    </>
  );
};

export default Navbar;
