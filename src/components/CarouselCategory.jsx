import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

const CarouselCategory = () => {
  return (
    <div className="bg-white m-3">
    <div className='text-2xl font-semibold p-3'>Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src="/images/category_0.jpg" alt="category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/category_1.jpg" alt="category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/category_2.jpg" alt="category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/category_3.jpg" alt="category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/category_4.jpg" alt="category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/category_5.jpg" alt="category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselCategory