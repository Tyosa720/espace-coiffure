// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";   


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide2 from '@/assets/slide2.jpeg'
import slide3 from '@/assets/slide3.png'


export default function Slider(){
  return (
    <Swiper
    className='h-full fit-image-height'
    loop={true}
    direction='horizontal'
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination, Autoplay]}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    >
      <div className='text-lg md:text-5xl title-main absolute top-0 text-white z-50 text-center'>
        <h1>
          Espace Coiffure<br />
          Coiffeur mixte - Balayage - Coloriste
        </h1> 
      </div>
      <SwiperSlide><img src={slide2.src} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3.src} alt="" /></SwiperSlide>
    </Swiper>
  );
};