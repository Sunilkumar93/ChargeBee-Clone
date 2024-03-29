import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Partners.css";
import {
  Link,
  Box,
  Text,
  Input,
  Button,
  GridItem,
  Grid,
  FormControl,
  FormLabel,
  Image,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,

} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Card({ src }) {
  return (
    <>
      <Box className="card_hover">
        <Box
          className="image"
          w={{ small: "120px", md: "180px", lg: "300px" }}
          h={{ base: "80px", md: "120px", lg: "160px" }}
        >
          <Box>
            {" "}
            <Link href="">
              <Box className="image_d">
                <Image
                  w={{ base: "70px", md: "100px", lg: "120px" }}
                  src={src}
                />
              </Box>
            </Link>{" "}
          </Box>
        </Box>

        <Box
          className="arrow"
          mt={{ base: "-28px", lg: "-24px" }}
          ml={{ base: "80px", md: "100px", lg: "305px" }}
          bg={{ base: "white", md: "white", lg: "#683bd0" }}
          borderRadius="5px 0px"
          padding="6px"
          display={{ sm:'none', md: "none", lg: "none",xl:'none',"2xl":'12px' }}
        >
          <Image
            w={{ base: "0px", md: "0px", lg: "12px" }}
            src="https://webstatic.chargebee.com/assets/web/543/images/partners/arrow-white.svg"
          ></Image>
        </Box>
      </Box>
    </>
  );
}

const Partners = () => {
  const [imgInd, setImgInd] = useState(0);
  const timeoutRef = useRef(null);

  const PopularBrandimages = [
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo1.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo2.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo3.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo4.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo5.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo6.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo7.png",
    " https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo8.png",
    "https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo9.png",
    "https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo10.png",
    "https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo11.png",
  ];
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setImgInd((prevIndex) => (prevIndex + 1) % PopularBrandimages.length),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [imgInd, PopularBrandimages.length]);

  return (
    <Box
      mt="80px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      w={{ base: "200%", md: "100%" }}
    >
      <Box
        className="top_nav"
        style={{
          width: "100%",
          height: "65px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          backgroundColor: "#651Aba",
          margin: "auto",
          color: "white",
        }}
      >

        <Box className='first'>
          {" "}
          <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} as="b">
            Become a Partner
          </Text>
        </Box>

        <Box>
          {" "}
          <Text fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} as="b">
            Partner FAQ
          </Text>
        </Box>
        <Box>
          {" "}
          <Text fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} as="b">
            Market Place
          </Text>
        </Box>
      </Box>
      <Box
        style={{
          width: "100%",
          backgroundColor: "#4300a3",
        }}
        height="auto"
      >
        <Grid
          templateRows={{
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(1, 1fr)",
          }}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap="50px"
          padding={{ base: "20px", md: "20px", lg: "60px" }}
        >
          <GridItem
            padding={{ base: "5px", md: "5px", lg: "36px" }}
            width={{ base: "100%", md: "100%", lg: "85%" }}
            mt="50px"
            color="#ffffff"
          >
            <Box
              w="max-content"
              style={{
                borderRadius: "20px",
                mb: "1cm",
                bg: " #522ec4",
              }}
            >
              <Text
                pl="14px"
                pr="14px"
                mb="12px"
                style={{ color: "#ffffff", border: "none" }}
                fontSize={{ base: "2xl", md: "2xl", lg: "xl" }}
              >
                Chargebee Partner Programs
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                fontWeight="700"
                align="left"
                lineHeight="55px"
              >
                Let's Work Together
              </Text>
            </Box>
            <Text
              align="left"
              mt="20px"
              fontSize={{ base: "3xl", md: "3xl", lg: "20px" }}
            >
              Becoming a Chargebee partner enables access to the world of
              subscriptions, bringing increased value to merchants, merchant
              aggregators and marketplaces around the world. Join our Partner
              Ecosystem today.
            </Text>
          </GridItem>

          <GridItem
            padding="40px"
            width="90%"
            margin="auto"
            height={{ base: "104%", md: "104%", lg: "108%" }}
            borderRadius="6px"
            mt="20px"
            bg="white"
            className="form"
          >
            <Text as="b" align="left">
              Drop your details in to connect with our Partnership Team
            </Text>
            <FormControl isRequired>
              <FormLabel fontWeight="400" align="left">
                First Name
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Last Name
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Business Email
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Job Title
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Company name
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Country/Region
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Phone number
              </FormLabel>
              <Box style={{ display: "flex", gap: "8px" }}>
                <select name="" id="" style={{ border: "1px solid" }}>
                  <option value="">India</option>
                  <option value="">United State</option>
                  <option value="">Brazil</option>
                  <option value="">Russia</option>
                  <option value="">Japan</option>
                </select>
                <Input size="sm" style={{ border: "1px solid" }} />
              </Box>

              <FormLabel fontWeight="400" align="left">
                Number of employees*
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Have you worked with Chargebee in the past? *
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                How do you envision working with Chargebee?
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                How do you envision working with Chargebee?
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                What type of organizations do you work with?*
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                Do you have mutual customers with Chargebee? If so, who?
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <FormLabel fontWeight="400" align="left">
                What does a successful partnership with Chargebee look like for
                you?*
              </FormLabel>
              <Input size="sm" style={{ border: "1px solid" }} />
              <Button
                colorScheme="blue"
                color="white"
                mt="20px"
                borderRadius="0px"
              >
                Become a Partner
              </Button>
            </FormControl>
            <Text fontSize="12px" align="left">
              Once you fill out this information, our Partnership team will get
              back to you shortly.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {/* PART-2  Technology Alliance Partner */}
      <Box mt="80px" padding="10px">
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          bg="#EEE7FF"
          p="3px"
          pl="16px"
          pr="16px"
          color="#a700f1"
          borderRadius="15px"
          fontSize={{ base: "2xl", md: "2xl", lg: "xl" }}
        >
          Technology Alliance Partner
        </Text>
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          mt="10px"
          mb="20px"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
        >
          {" "}
          Payment Service Provider (PSPs)
        </Text>
        <Box mb="26px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            Payment service providers (PSP) help manage the entire payment
            transaction from the moment your customer pays to the moment you
            receive the payment in your business bank account.
          </Text>
        </Box>
        <Box>
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            We believe a diverse payments ecosystem helps businesses of all
            types and sizes. This means fostering an environment that offers
            connectivity between Chargebee's payment service partners and our
            global network of merchants and platform customers.
          </Text>
        </Box>
      </Box>
      <SimpleGrid
        columnGap="20px"
        rowGap="20px"
        columns={{ base: 2, md: 2, lg: 3 }}
        className="psp"
        mt="60px"
      >
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/cybersource.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/adyen.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/paypal.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/gocardless.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/bluesnap.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/checkout.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/509/images/partners/solution-partners-agencies/mollie.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/payment-service-provider/worldpay.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/worldline.png"
          }
        />
      </SimpleGrid>

      <Box className="nextPageLink">
        <Box className="asd">
          {" "}
          <Link>
            <Text as="b" fontSize="18px">
              See all Payment Gateways
            </Text>
          </Link>
        </Box>

        <Box className="righticon">
          <ChevronRightIcon boxSize={7} w={10} />
        </Box>
      </Box>

      {/* PART-3 */}
      {/* PART-2  Technology Alliance Partner */}
      <Box mt="80px" padding="10px">
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          bg="#EEE7FF"
          p="3px"
          pl="16px"
          pr="16px"
          color="#a700f1"
          borderRadius="15px"
          fontSize={{ base: "2xl", md: "2xl", lg: "xl" }}
        >
          Technology Alliance Partners
        </Text>
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          mt="10px"
          mb="20px"
          fontSize={{ base: "3xl", md: "2xl", lg: "4xl" }}
          fontWeight="600"
        >
          {" "}
          Independent Software Vendor (ISVs)
        </Text>
        <Box mb="26px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            Through customized solutions and personalized integration support,
            Chargebee's Independent Software Vendors deliver unique solutions
            that provide additional functionality that helps grow the global
            network of merchants in the ever-expanding world of subscriptions.
          </Text>
        </Box>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} className="psp" mt="60px">
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/independent-software-vendor/xero.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/independent-software-vendor/hubspot.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/independent-software-vendor/quickbooks.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/independent-software-vendor/salesforce.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/independent-software-vendor/avalara.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/independent-software-vendor/sage-intact.png"
          }
        />
      </SimpleGrid>

      <Box className="nextPageLink">
        <Box className="asd">
          {" "}
          <Link>
            <Text as="b" fontSize="18px">
              See all integrations
            </Text>
          </Link>
        </Box>

        <Box className="righticon">
          <ChevronRightIcon boxSize={7} w={10} />
        </Box>
      </Box>
      {/* PART-4 */}
      <Box mt="80px" padding="10px">
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          mt="10px"
          mb="20px"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
        >
          {" "}
          Solution Partners Agencies
        </Text>
        <Box mb="26px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            Chargebee's Solutions Partners are a network of certified agencies
            and consultancies who provide strategic and operational support to
            the growing economy of Subscription businesses. If you work with
            businesses employing a business subscription model, apply to join
            our Solution Partners network today.
          </Text>
        </Box>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} className="psp" mt="60px">
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/eagle-eye.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/ion.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/4ng.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/subscription-rebels.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/torq-partners.svg"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/black-winch.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/recap.png"
          }
        />
      </SimpleGrid>

      {/* PART-5 */}
      <Box mt="80px" padding="10px">
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          mt="10px"
          mb="20px"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
        >
          Channel Resell Partners
        </Text>
        <Box mb="26px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            Chargebee works with a variety of Referral Partners who believe in
            our mission of creating a more connected subscription world. We
            offer a competitive referral commission to qualified partners who
            refer merchants to Chargebee.
          </Text>
        </Box>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} className="psp" mt="60px">
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/channel-resell-partners/aws.png"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/channel-resell-partners/monobunt.svg"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/channel-resell-partners/crm-partners.svg"
          }
        />
        <Card
          src={
            "https://webstatic.chargebee.com/assets/web/543/images/partners/solution-partners-agencies/ion.png"
          }
        />
      </SimpleGrid>

      {/* PART-6 */}

      <Box mt="90px" bg="#6b608315" padding="10px">
        <Text
          p="40px"
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          mt="10px"
          mb="20px"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          fontWeight="600"
        >
          Why Sell as a Partner?
        </Text>
        <Box mb="26px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            As a Chargebee certified reseller, you have the opportunity to help
            your growing business customers. Chargebee's easy-to-use flexible
            pricing and billing logic enables your clients to scale and expand
            into new markets.
          </Text>
        </Box>

        <SimpleGrid columns={{ lg: 3 }} margin="auto">
          <Box>
            <Box>
              <Image
                margin="auto"
                boxSize="100px"
                src="https://webstatic.chargebee.com/assets/web/509/images/partners/why-partner/partner-directory-exposure.png"
              />
            </Box>
            <Text
              padding="10px"
              fontWeight="600"
              fontSize={{ base: "2xl", md: "2xl", lg: "xl" }}
              margin={{ base: "left", md: "center", lg: "auto" }}
              w="max-content"
            >
              Partner Directory Exposure
            </Text>
            <Text
              mt="20px"
              margin={{ base: "left", md: "center", lg: "auto" }}
              color="#64648c"
              fontSize={{ base: "2xl", md: "2xl", lg: "18px" }}
              w={{ base: "100%", md: "90%", lg: "80%" }}
              align={{ base: "left", md: "left", lg: "center" }}
            >
              Gain exposure to thousands of Chargebee users as a certified
              reseller
            </Text>
          </Box>
          <Box>
            <Box>
              <Image
                margin="auto"
                boxSize="100px"
                src="https://webstatic.chargebee.com/assets/web/543/images/partners/why-partner/co-marketing-ppportunities.png"
              />
            </Box>
            <Text
              padding="10px"
              fontWeight="600"
              fontSize={{ base: "2xl", md: "2xl", lg: "xl" }}
              margin={{ base: "left", md: "center", lg: "auto" }}
              w="max-content"
              mt="10px"
              mb="20px"
            >
              Co-Marketing Opportunities
            </Text>
            <Text
              margin={{ base: "left", md: "center", lg: "auto" }}
              color="#64648c"
              fontSize={{ base: "2xl", md: "2xl", lg: "18px" }}
              w={{ base: "100%", md: "90%", lg: "80%" }}
              align={{ base: "left", md: "left", lg: "center" }}
            >
              Reach a wider audience through co-branded blog posts, webinars,
              events and more
            </Text>
          </Box>
          <Box>
            <Box>
              <Image
                boxSize="100px"
                margin="auto"
                src="https://webstatic.chargebee.com/assets/web/509/images/partners/why-partner/rewards-for-referrals.png"
              />
            </Box>
            <Text
              padding="10px"
              fontWeight="600"
              fontSize={{ base: "2xl", md: "2xl", lg: "xl" }}
              margin={{ base: "left", md: "center", lg: "auto" }}
              w="max-content"
              mt="10px"
              mb="20px"
            >
              Get Rewards for Referrals
            </Text>
            <Text
              margin={{ base: "left", md: "center", lg: "auto" }}
              color="#64648c"
              fontSize={{ base: "2xl", md: "2xl", lg: "18px" }}
              w={{ base: "100%", md: "90%", lg: "80%" }}
              align={{ base: "left", md: "left", lg: "center" }}
            >
              Earn commissions on referrals and access discounted pricing
            </Text>
          </Box>
        </SimpleGrid>

        <Box align="center" m="60px">
          <button className="button" display="flex">
            Become A Partner{" "}
            <Box w="30px" mt="-28px" ml="200px" className="rightIcon">
              <ChevronRightIcon boxSize={8} />
            </Box>
          </button>
        </Box>
      </Box>

      {/* PART-7 */}

      <Box>
        <Text
          align={{ base: "left", md: "left", lg: "center" }}
          margin={{ base: "left", md: "center", lg: "auto" }}
          fontSize={{ base: "3xl", md: "2xl", lg: "4xl" }}
          fontWeight="600"
          p="20px"
          w={{ base: "100%", md: "100%", lg: "50%" }}
        >
          See how these partners achieved more with Chargebee
        </Text>
      </Box>
      <Box
        mb={{ base: "450px", sm: "400px", md: "40px", lg: "50px", xl: "50px" }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
          ml={{ base: "30px" }}
          w="80%"
          h="6cm"
          gap="40px"
          align={{ base: "auto", lg: "center" }}
          margin="auto"
        >
          <Box className="container_iframe">
            <iframe
              className="responsive_iframe"
              height="315"
              width="500"
              src="https://www.youtube.com/embed/VuemPP0sdcQ"
              title="YouTube video player"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              
            ></iframe>
          </Box>
          <Box className="container_iframe">
            <iframe
              title="youtube_video"
              className="responsive_iframe"
              height="315"
              width="500"
              src="https://www.youtube.com/embed/2vtGuSSMyjo?playlist=2vtGuSSMyjo&amp;loop=1"
            
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             
            ></iframe>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        align="center"
        mt={{ base: "150px", sm: "180px", md: "100px", lg: "50px", xl: "50px" }}
        mb={{ base: "80px" }}
      >
        <button className="button" display="flex">
          Become A Partner{" "}
          <Box w="30px" mt="-28px" ml="200px" className="rightIcon">
            <ChevronRightIcon boxSize={8} />
          </Box>
        </button>
      </Box>

      {/* Part-8 */}
      <Box
        margin="auto"
        borderRadius="10px"
        mt="100px"
        mb="80px"
        color="#181064"
        display={{ base: "none", md: "none", lg: "flex" }}
        w="60%"
        h="350px"
        boxShadow="dark-lg"
        align="center"
        p="20px"
      >
        <Box ml="-90px" mt="70px" alignItems="left" w="160px">
          <Image src="https://images.g2crowd.com/uploads/report_medal/image/1003599/medal.svg"></Image>
        </Box>

        <Box p="10px" align="left">
          <Text fontSize="4xl" fontWeight="700" w="60%" align="left">
            Trusted partner in 4500+ growth stories...
          </Text>
          <SimpleGrid columns={4}>
            <Box>
              <Text align="left" fontSize="4xl" fontWeight="700">
                94%
              </Text>
              <Box align="left">
                {" "}
                <Text w="60%" align="left">
                  Most likely to recommend
                </Text>
              </Box>
            </Box>
            <Box>
              <Text align="left" fontSize="4xl" fontWeight="700">
                1.3
              </Text>
              <Box align="left">
                {" "}
                <Text align="left" w="60%">
                  Avg. months to go live
                </Text>
              </Box>
            </Box>
            <Box>
              <Text align="left" fontSize="4xl" fontWeight="700">
                #1
              </Text>
              <Box align="left">
                <Text w="60%" align="left">
                  Subscription Billing Software
                </Text>
              </Box>
            </Box>
            <Box>
              <Text align="left" fontSize="4xl" fontWeight="700">
                98%
              </Text>
              <Box align="left">
                <Text w="60%" align="left">
                  Rated 4+ stars on 5{" "}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* PART-9 */}

      <Box mt="80px" padding="30px" className="part8" margin="auto">
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w={{ lg: "45%" }}
          p="20px"
          mb="20px"
          fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
          fontWeight="600"
          align="center"
        >
          Thousands of partners, one shared goal.
        </Text>
        <Box mb="26px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            fontSize={{ base: "3xl", md: "2xl", lg: "22px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            From global start-ups to enterprise organizations, Chargebee
            partners with unique, future-focused companies that want to do one
            thing: add value to their customers. By partnering with
            organizations that share our values, we can bring our customers the
            latest and greatest when it comes to subscription management.
          </Text>
        </Box>

        <Box align="center" m="60px">
          <button
            className="button btn1"
            display="flex"
            bg="#a700f1"
          >
            Become A Partner{" "}
            <Box w="30px" mt="-28px" ml="240px" className="rightIcon">
              <ChevronRightIcon boxSize={8} />
            </Box>
          </button>
        </Box>
      </Box>

      {/* PART-10  Accordion*/}
      <Box mt="80px" align="center">
        <Box mb="30px">
          {" "}
          <Text fontSize="3xl" as="b">
            Chargebee Partner Program FAQs
          </Text>
        </Box>

        <Box w={{ base: "90%", md: "90%", lg: "75%" }}>
          <Accordion allowMultiple>
            <AccordionItem p="20px" boxShadow="2xl" mb="30px">
              <h2>
                <AccordionButton _expanded={{ color: "black" }}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="700">
                    How do I register for the partner portal and submit leads to
                    Chargebee?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <ul align="left"> Registering for the Partner Portal</ul>
                <li align="left">
                  Go to{" "}
                  <Link href="#" color="blue">
                    chargebee.allbound.com
                  </Link>{" "}
                </li>
                <li align="left">Click Request an Account</li>
                <li align="left">Fill out the form</li>
                <li align="left">
                  Go to your email inbox and verify your email address
                </li>
                <li align="left">
                  Head to the illuminated light bulb icon, click, and start the
                  "How to Use the Chargebee Partner Portal" learning track
                </li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="20px" boxShadow="2xl" mb="30px">
              <h2>
                <AccordionButton _expanded={{ color: "black" }}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="700">
                    Why Would a Payment Processor, ISV, or Solution Partner want
                    to refer business to Chargebee?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <li align="left">
                  Steady monthly income that compounds over time is a stable and
                  more predictable source of merchant revenue.
                </li>
                <li align="left">
                  Chargebee is more than just recurring billing; there are a lot
                  of features and benefits that we have built over our ten-year
                  history.
                </li>
                <li align="left">
                  We have smart dunning features that automatically allow our
                  system to retry a failed transaction on behalf of the
                  merchant.
                </li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="20px" boxShadow="2xl" mb="30px">
              <h2>
                <AccordionButton _expanded={{ color: "black" }}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="700">
                    Does Chargebee levy a membership charge on its partners?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text align="left">
                  {" "}
                  No, Chargebee does not levy a membership charge on its
                  partners
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="20px" boxShadow="2xl" mb="30px">
              <h2>
                <AccordionButton _expanded={{ color: "black" }}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="700">
                    What are the different types of partnerships at Chargebee,
                    and what are their benefits?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text align="left" mb="15px">
                  We offer these different kinds of partnerships—
                </Text>
                <li align="left">ISV Partners</li>
                <li align="left">Solution Partners</li>
                <li align="left">Resellers Partners</li>
                <Text align="left" m="15px 0px">
                  Our solution partnership provides partners with opportunities
                  to leverage their technical and sales capabilities to consult,
                  sell, customize, and implement our products for businesses
                  across the globe.
                </Text>
                <Text align="left" mb="15px">
                  ISV Partners can integrate their offerings with our products
                  to create combined solutions that deliver 'wow' moments for
                  customers.
                </Text>
                <Text align="left" mb="15px">
                  Reseller Partners recommend our Chargebee to their network and
                  reap rich rewards for minimum investment.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="20px" boxShadow="2xl" mb="30px">
              <h2>
                <AccordionButton _expanded={{ color: "black" }}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="700">
                    My business is global and in multiple countries. Do I need
                    to sign up for the Partner Program in each country?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text align="left">
                  No, you are not required to sign up separately for each
                  country. Sign up once, and your onboarding manager(s) will
                  discuss the regions with you.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>

      {/* PART=11 */}

      <Box mt="100px" bg="#6b608315" p="30px">
        <Text
          margin={{ base: "left", md: "center", lg: "auto" }}
          w="max-content"
          mt="30px"
          mb="50px"
          fontSize={{ base: "3xl", md: "2xl", lg: "4xl" }}
          fontWeight="600"
        >
          Chargebee Marketplace
        </Text>
        <Box mb="26px" mt="30px">
          <Text
            margin={{ base: "left", md: "center", lg: "auto" }}
            color="#64648c"
            fontSize={{ base: "3xl", md: "2xl", lg: "18px" }}
            w={{ base: "100%", md: "90%", lg: "62%" }}
            align={{ base: "left", md: "left", lg: "center" }}
          >
            Visit our Chargebee Marketplace to explore our integrations and to
            see what makes our subscription marketplace unique. Through our
            marketplace, we empower our customers and partners to leverage
            Chargebee as a platform for their continued growth.
          </Text>

          <Box align="center" m="60px">
            <button className="button" display="flex">
              Visit Our Marketplace{" "}
              <Box w="30px" mt="-28px" ml="240px" className="rightIcon">
                <ChevronRightIcon boxSize={8} />
              </Box>
            </button>
          </Box>
        </Box>

        <Box display="flex">
          <Box w="10%" h="100px">
            {" "}
            <Box className="slideshow" mt="20px" mb="30px">
              <img src={PopularBrandimages[imgInd]} alt={imgInd} />
              <Box className="slider">
                {PopularBrandimages.map((_, el) => (
                  <Box
                    key={el}
                    onClick={() => setImgInd(el)}
                    className={imgInd === el ? "active" : ""}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="slider">
            {" "}
            <Box w="100%" display="flex" className="slider_track">
              <Box className="slide">
                {" "}
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo1.png"></Image>
              </Box>
              <Box className="slide">
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo2.png"></Image>
              </Box>
              <Box className="slide">
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo3.png"></Image>
              </Box>
              <Box className="slide">
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo4.png"></Image>
              </Box>
              <Box className="slide">
                {" "}
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo5.png"></Image>
              </Box>
              <Box className="slide">
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo6.png"></Image>
              </Box>
              <Box className="slide">
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo7.png"></Image>
              </Box>
              <Box className="slide">
                {" "}
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo8.png"></Image>
              </Box>
              <Box className="slide">
                {" "}
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo9.png"></Image>
              </Box>
              <Box className="slide">
                {" "}
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo10.png"></Image>
              </Box>
              <Box className="slide">
                <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo1.png"></Image>
              </Box>
            </Box>
            <Box className="slide">
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo2.png"></Image>
            </Box>
            <Box className="slide">
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo3.png"></Image>
            </Box>
            <Box className="slide">
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo4.png"></Image>
            </Box>
            <Box className="slide">
              {" "}
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo5.png"></Image>
            </Box>
            <Box className="slide">
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo6.png"></Image>
            </Box>
            <Box className="slide">
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo7.png"></Image>
            </Box>
            <Box className="slide">
              {" "}
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo8.png"></Image>
            </Box>
            <Box className="slide">
              {" "}
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo9.png"></Image>
            </Box>
            <Box className="slide">
              {" "}
              <Image src="https://webstatic.chargebee.com/assets/web/543/images/partners/marketplace-logos/logo10.png"></Image>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
