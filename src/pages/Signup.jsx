import {
  Box,
  Flex,
  Grid,
  Heading,
  Hide,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/SignupRedux/Signup.Actions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const signupStatus = useSelector((store) => store.signup);
  console.log(email, password);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    console.log(payload);
    dispatch(signup({ payload })).then((res) => {
      console.log(res);
      if (res === "user exist please login") {
        alert("user Exist");
        return navigate("/login");
      } else if (res === "user registered") {
        alert("user signed up successfully");
        return navigate("/login");
      }

      // alert("succesfull");
      // return navigate("/login");
    });
  };

  return (
    <Box pt="80px" color="black">
      <Grid gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 2fr" }}>
        <Hide below="md">
          <Box className="left" bg="#500ad2">
            <Box bg="white" px="60px">
              <Image
                src="https://webstatic.chargebee.com/assets/web/543/images/signup/customers/dailius-wilson-getaccept.png"
                alt="signup_logo"
              />
            </Box>
            <Box textAlign="center" py="30px" bg="#38039a" color="white">
              <Heading size="lg">Dailius Wilson</Heading>
              <Text>VP Sales & Growth</Text>
            </Box>
            <Flex
              flexDir="column"
              m="auto"
              justifyContent="center"
              textAlign="center"
              px="50px"
              bg="#500ad2"
              color="white"
              pt="25%"
            >
              <h1>
                Chargebee is a fantastic solution that really meets the needs of
                any SaaS business. Our revenue grew 4x in 12 months, using
                Chargebee.
              </h1>
              <Box mt="20px">
                <Image
                  w="50%"
                  m="auto"
                  src="https://f.hubspotusercontent00.net/hubfs/541808/Logotype%202020/GA_Logotype_2020_Neg.png"
                />
              </Box>
            </Flex>
          </Box>
        </Hide>

        <Box className="right" bg="#fff">
          {/* <Button position="absolute" right="10%">Login &#8594;</Button> */}

          <fieldset
            style={{
              border: "1px solid gray",
              paddingLeft: "20px",
              margin: "10%",
              borderRadius: "10px",
              padding: "5%",
            }}
          >
            <legend style={{ fontSize: "24px" }}>
              Create Your Sandbox Account
            </legend>
            <form onSubmit={handleSignup}>
              <Box h="100%">
                <label style={{ fontSize: "20px" }}> Work email </label>
                <Input
                  mt="10px"
                  mb="20px"
                  borderColor="gray.400"
                  colorScheme="gray"
                  placeholder="parag@company.com"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* <label  style={{fontSize:"20px"}}> Phone number </label>
                <InputGroup >
                <InputLeftElement
                  pointerEvents='none'
                  children={<PhoneIcon color='gray.300' />}
                />
                <Input mt="10px" mb="20px" borderColor="gray.400" size="lg" type='tel' placeholder='Phone number' />
                </InputGroup> */}

                <label style={{ fontSize: "20px" }}> Password </label>
                <Input
                  mt="10px"
                  mb="20px"
                  borderColor="gray.400"
                  placeholder="password..."
                  size="lg"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Flex gap="6px" mb="20px">
                  <input type="checkbox" borderColor="gray.400" />
                  <Text fontSize="14px">
                    I want to be notified about the awesome happenings* at
                    Chargebee
                  </Text>
                </Flex>

                <Input
                  mb="40px"
                  size="lg"
                  type="submit"
                  value="Complete Signup &#8594;"
                  bg="#500ad2"
                  color="white"
                  fontWeight="bold"
                />
              </Box>
            </form>

            <Box>
              <Text mb="20px" size="14px">
                By clicking on Complete Signup, you agree to our Terms and you
                acknowledge having read our Privacy Notice
              </Text>
              <Text size="10px">
                *This includes periodic newsletters, emails about usage tips,
                billing practices, and other communications. You can opt out
                anytime within the app.
              </Text>
            </Box>
          </fieldset>
        </Box>
      </Grid>
    </Box>
  );
};

export default Signup;
