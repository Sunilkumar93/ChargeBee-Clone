import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Hide,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Show,
} from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";
// import { useSelector, useDispatch } from "react-redux";
import Product from "./Product/Product";
import Solutions from "./Solutaions/Solutions";
import Resources from "./Resources/Resources";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/LoginRedux/Login.Actions";
import { useToast } from "@chakra-ui/react";

const Navbar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth,email } = useSelector((state) => state.login);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  useEffect(() => {
  
  }, [isAuth, dispatch,email]);
  console.log(email);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      toast({
        title: "User Logged out .",
        description: "Visit again",
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      return navigate("/login");
    });
    
  };

  return (
    <>
      <Box
        fontSize="17px"
        position="fixed"
        top="0"
        width="100%"
        alignItems="center"
        bg="white"
        color="black"
        display="flex"
        px="20px"
        justifyContent="space-between"
        zIndex="999"
      >
        <Box display="flex" alignItems="center" gap="5">
          <Link to="/">
            <Box w={{ base: "100px", md: "150px" }}>
              <Image
                src="https://www.orderdesk.com/wp-content/uploads/2022/05/logo-chargebee.png"
                alt="navbar_logo"
              />
            </Box>
          </Link>
          <Hide below="md">
            <Link to="/">
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <span>Product</span>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Product />
                </PopoverContent>
              </Popover>
            </Link>
            <Link to="/price">Pricing</Link>
            <Link to="/">
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <span>Solutions</span>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Solutions />
                </PopoverContent>
              </Popover>
            </Link>
            <Link to="/customers">Customers</Link>
            <Link to="/">
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <span>Resources</span>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Resources />
                </PopoverContent>
              </Popover>
            </Link>
            <Link to="/partners">Partners</Link>
          </Hide>
        </Box>
        <Box display="flex" alignItems="center" gap="5">
          <Hide below="md">
            <span>English</span>
           
            {/* <LockIcon style={{ margin: "auto 5px", color: "#ff7846" }} />
            Login */}
            <Link to={!isAuth && "/login"}>
              {isAuth ? (
                <Box onClick={handleLogout}>
                  <UnlockIcon
                    style={{ margin: "auto 5px", color: "#ff7846" }}
                  />
                  Logout
                  <p>{email}</p>
                </Box>
              ) : (
                <Box>
                  <LockIcon style={{ margin: "auto 5px", color: "#ff7846" }} />
                  Login
                </Box>
              )}
            </Link>
            <Link to="/demo">
              <button
                className="o"
                style={{ padding: "5px 10px", color: "white" }}
              >
                Get a Demo &#62;
              </button>
            </Link>
          </Hide>
        </Box>
        <Show below="md">
          <Box>
            <button onClick={() => handleClick(size)} key={size}>
              {<HamburgerIcon boxSize="1.5em" />}
            </button>
            {/* ----------------------------- */}
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton
                  border="2px solid #38039a"
                  bg="#fff"
                  color="#38039a"
                />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <Box className="navbar_right" flexGrow="3">
                     <p className="side">Hello {email}</p>
                    <Link to="/" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Home
                      </p>
                    </Link>

                    <Link to="/price" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Pricing
                      </p>
                    </Link>

                    <Link to="/customers" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Customers
                      </p>
                    </Link>
                    <Link to="/partners" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Partners
                      </p>
                    </Link>

                    <Link to="#" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Product
                      </p>
                    </Link>

                    <Link to="#" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Solutions
                      </p>
                    </Link>

                    <Link to="/" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Resources
                      </p>
                    </Link>

                    

                    <Link to={!isAuth && "/login"}>
                      {isAuth ? (
                        <Box onClick={onClose} className="side">
                          
                          <Box onClick={handleLogout}>
                            <UnlockIcon
                            style={{ margin: "auto 5px", color: "#ff7846" }}
                          />Logout

                          </Box>
                        </Box>
                      ) : (
                        <Box onClick={onClose} className="side">
                          <LockIcon
                            style={{ margin: "auto 5px", color: "#ff7846" }}
                          />
                          Login
                        </Box>
                      )}
                    </Link>
                    {/* <Link to="/login" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Login
                      </p>
                    </Link> */}
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
