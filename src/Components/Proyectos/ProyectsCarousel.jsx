import React from 'react';
import { Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";



const ProyectsCarousel = ({imgsGalery}) => {
  return (
    <Swiper modules={[Autoplay]}         autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}>
      {
        imgsGalery?.map( i => 
          <SwiperSlide><Image src={i}/></SwiperSlide>
        )
      }
      </Swiper>
  )
}

export default ProyectsCarousel