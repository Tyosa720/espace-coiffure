// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";   


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide2 from '@/assets/slide2.jpeg'
import slide3 from '@/assets/slide3.png'


export default function Slider(){
  return (
    <Swiper
    className='h-full fit-image-height'
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
    >
      <SwiperSlide><img src={slide2.src} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3.src} alt="" /></SwiperSlide>
    </Swiper>
  );
};