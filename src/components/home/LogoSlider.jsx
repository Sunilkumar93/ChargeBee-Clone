import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./LogoSlider.css";
import { Autoplay } from "swiper";
import { Box, Container, Image } from "@chakra-ui/react";

import "swiper/css";

import i1 from "../../assets/logos-sprite1.png";
import i2 from "../../assets/logos-sprite2.png";
import i3 from "../../assets/logos-sprite3.png";
import i4 from "../../assets/logos-sprite4.png";
import i5 from "../../assets/logos-sprite5.png";
import i6 from "../../assets/logos-sprite6.png";
import i7 from "../../assets/logos-sprite7.png";
import i8 from "../../assets/logos-sprite8.png";

const LogoSlider = () => {
  return (
    <Container h="30px" maxW={{ base: "100%", md: "80%", lg: "75%" }}>
      <Swiper
        slidesPerView={4}
        loop={true}
        loopFillGroupWithBlank={true}
        spaceBetween={1}
        autoplay={{
          delay: 1500,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i1} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i2} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i3} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i4} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i5} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i6} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i7} alt="image" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Image h="100%" src={i8} alt="image" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default LogoSlider;
