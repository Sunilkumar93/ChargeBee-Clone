import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HomeSlider = () => {
  return (
    <Box
      position="relative"
      h={{ base: "1050px", md: "450px", lg: "450px" }}
      overflow="hidden"
    >
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            justifyContent="space-between"
            h={{ base: "40%", md: "100%", lg: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            overflow="hidden"
          >
            <Box w={{ base: "100%", md: "40%", lg: "45%" }}>
              <Heading
                fontSize={{ base: "1.7rem", md: "2rem", lg: "2.62rem" }}
                textAlign="start"
              >
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box
              w={{ base: "100%", md: "50%", lg: "40%" }}
              h={{ base: "70%", md: "70%", lg: "70%" }}
              overflow="hidden"
              borderRadius={90}
              bgGradient="linear(180deg,rgba(91,1,180,.08) 0,rgba(255,255,255,0) 100%),#fff"
            >
              <Image
                boxSize="100%"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            justifyContent="space-between"
            h={{ base: "40%", md: "100%", lg: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            overflow="hidden"
          >
            <Box w={{ base: "100%", md: "40%", lg: "45%" }}>
              <Heading
                fontSize={{ base: "1.7rem", md: "2rem", lg: "2.62rem" }}
                textAlign="start"
              >
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box
              w={{ base: "100%", md: "50%", lg: "40%" }}
              h={{ base: "70%", md: "70%", lg: "70%" }}
              overflow="hidden"
              borderRadius={90}
              bgGradient="linear(180deg,rgba(91,1,180,.08) 0,rgba(255,255,255,0) 100%),#fff"
            >
              <Image
                boxSize="100%"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            justifyContent="space-between"
            h={{ base: "40%", md: "100%", lg: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            overflow="hidden"
          >
            <Box w={{ base: "100%", md: "40%", lg: "45%" }}>
              <Heading
                fontSize={{ base: "1.7rem", md: "2rem", lg: "2.62rem" }}
                textAlign="start"
              >
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box
              w={{ base: "100%", md: "50%", lg: "40%" }}
              h={{ base: "70%", md: "70%", lg: "70%" }}
              overflow="hidden"
              borderRadius={90}
              bgGradient="linear(180deg,rgba(91,1,180,.08) 0,rgba(255,255,255,0) 100%),#fff"
            >
              <Image
                boxSize="100%"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            justifyContent="space-between"
            h={{ base: "40%", md: "100%", lg: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            overflow="hidden"
          >
            <Box w={{ base: "100%", md: "40%", lg: "45%" }}>
              <Heading
                fontSize={{ base: "1.7rem", md: "2rem", lg: "2.62rem" }}
                textAlign="start"
              >
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box
              w={{ base: "100%", md: "50%", lg: "40%" }}
              h={{ base: "70%", md: "70%", lg: "70%" }}
              overflow="hidden"
              borderRadius={90}
              bgGradient="linear(180deg,rgba(91,1,180,.08) 0,rgba(255,255,255,0) 100%),#fff"
            >
              <Image
                boxSize="100%"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            justifyContent="space-between"
            h={{ base: "40%", md: "100%", lg: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
            overflow="hidden"
          >
            <Box w={{ base: "100%", md: "40%", lg: "45%" }}>
              <Heading
                fontSize={{ base: "1.7rem", md: "2rem", lg: "2.62rem" }}
                textAlign="start"
              >
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box
              w={{ base: "100%", md: "50%", lg: "40%" }}
              h={{ base: "70%", md: "70%", lg: "70%" }}
              overflow="hidden"
              borderRadius={90}
              bgGradient="linear(180deg,rgba(91,1,180,.08) 0,rgba(255,255,255,0) 100%),#fff"
            >
              <Image
                boxSize="100%"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
      <Box
        w={{ base: "100%", md: "40%", lg: "45%" }}
        position="absolute"
        top={{ base: "73%", md: "55%", lg: "50%" }}
        left="0%"
        zIndex="1"
      >
        <Text
          color="#64648c"
          mb={{ base: "2rem", md: "0.8rem", lg: "3rem" }}
          mr={{ base: "1rem", md: "0", lg: "8rem" }}
        >
          Chargebee is the subscription billing and revenue management platform
          that lets you solve for your today, and scale for your tomorrow.
        </Text>
        <Flex
          w="100%"
          gap="5"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          pr={{ base: "5", md: "0", lg: "0" }}
        >
          <Button
            p={6}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="none"
            borderRadius={50}
            fontSize="1rem"
            fontWeight="600"
            bgGradient="linear(to right bottom,#4300a3,#4d00aa,#5700b1,#6000b7,#6a00be,#7200c5,#7b00cb,#8300d2,#8c00da,#9500e2,#9e00e9,#a700f1)"
            variant="solid"
            _hover={{ gap: "3px" }}
          >
            Get a Demo
          </Button>
          <Button
            p={6}
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
            colorScheme="blackAlpha"
            borderRadius={50}
            fontSize="1rem"
            fontWeight="600"
            color="black"
            _hover={{ gap: "3px" }}
          >
            Signup for free
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeSlider;
