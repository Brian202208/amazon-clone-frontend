import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src="/images/carousel_1.jpg" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_2.jpg" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_3.jpg" alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
