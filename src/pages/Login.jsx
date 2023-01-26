import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/LoginRedux/Login.Actions";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(login({ payload })).then((res) => {
      console.log(res);
      if (res.msg === "user not exist") {
        alert("user not exist");
        return navigate("/signup");
      } else if (res.msg === "wrong credential") {
        alert("please enter correct detail");
      } else if (res.msg === "login success" && res.token) {
        alert("login Successfully");
        return navigate("/");
      } else if (res.msg === "user not found") {
        alert("user not exist");
        return navigate("/signup");
      }
    });
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box pt="110px" pb="100px" bg="white" color="black">
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        className="login_outer"
        width={{ base: "90vw", md: "70vw", lg: "70vw" }}
        m="auto"
        boxShadow="dark-lg"
        gap={10}
        rounded="md"
        bg="white"
      >
        <Show above="md">
          <Box m="40px 20px 40px 40px" className="login_left">
            <Box>
              <Image
                p="10px"
                borderRadius="12px"
                w="15%"
                bg="#6200ea"
                src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logo-white.svg"
              />
            </Box>
            <Text color="gray" fontSize="14px" mt="10px" letterSpacing="1px">
              ANNOUNCING SUMMER 2022 PRODUCT RELEASE
            </Text>
            <Text mt="10px">
              Monetize Effectively to Tackle Market Turbulence
            </Text>
            <Box display="flex" mt="20px">
              <Box w="50%">
                <Image
                  w="90%"
                  src="https://d190vb4jo83j4z.cloudfront.net/Login_Page_Banner_Aug_22.png"
                  alt="login_logo"
                />
              </Box>

              <Box w="50%">
                <Text color="gray">
                  Chargebee's Summer 2022 Release brings you better monetization
                  capabilities that help you seize revenue opportunities by
                  improving customer lifetime value, managing cashflows better,
                  and achieving topline growth.
                </Text>
              </Box>
            </Box>
            <Text cursor="pointer" mt="10px" color="blue">
              See what's new across our products
            </Text>
          </Box>
        </Show>

        <Box m="40px 40px 40px 20px" className="login_right">
          <Text>Sign in to Chargebee!</Text>
          <form onSubmit={handleLogin}>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              size="md"
              mt="10px"
            />
            <InputGroup size="md" mt="20px">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Text h="1.75rem" size="md" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Text>
              </InputRightElement>
            </InputGroup>
            <Flex mb="20px" alignItems="center" justifyContent="space-between">
              <Button
                _hover={{ bg: "#f67d19", color: "white" }}
                type="submit"
                bg="#f67d19"
                mt="20px"
                px="20px"
                color="white"
              >
                Sign in
              </Button>
              <Box>
                <a href="/login">Forgot password?</a>
              </Box>
            </Flex>
            <Box mb="20px">
              <Link mb="20px" to="/signup">
                Don't have an Account{" "}
                <span style={{ color: "blue" }}> Click here</span>
              </Link>
            </Box>
          </form>
          <hr />
          <Box mt="30px" justifyContent="center" display="flex">
            <Button
              color="white"
              bg="#4285f4"
              borderRadius="0px"
              width="80%"
              colorScheme="google"
              leftIcon={<GoogleIcon />}
            >
              Sign in With Google
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
