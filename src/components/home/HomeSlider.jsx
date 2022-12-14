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
    <Box position="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex justifyContent="space-between">
            <Box w="45%">
              <Heading fontSize="2.62rem" textAlign="start">
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box w="30%">
              <Image
                boxSize={"100%"}
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justifyContent="space-between">
            <Box w="45%">
              <Heading fontSize="2.62rem" textAlign="start">
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box w="30%">
              <Image
                boxSize={"100%"}
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justifyContent="space-between">
            <Box w="45%">
              <Heading fontSize="2.62rem" textAlign="start">
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box w="30%">
              <Image
                boxSize={"100%"}
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justifyContent="space-between">
            <Box w="45%">
              <Heading fontSize="2.62rem" textAlign="start">
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box w="30%">
              <Image
                boxSize={"100%"}
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justifyContent="space-between">
            <Box w="45%">
              <Heading fontSize="2.62rem" textAlign="start">
                The subscription management platform that enabled Slidebean to
                slide into 30+ countries.
              </Heading>
            </Box>

            <Box w="30%">
              <Image
                boxSize={"100%"}
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="image"
              />
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
      <Box w="45%" position="absolute" top="55%" left="0%" zIndex="1">
        <Text color="#64648c" mb="3rem" mr="8rem">
          Chargebee is the subscription billing and revenue management platform
          that lets you solve for your today, and scale for your tomorrow.
        </Text>
        <Flex w="60%" justifyContent="space-between">
          <Button
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
