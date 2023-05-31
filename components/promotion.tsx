import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from "swiper";   


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const promotion = ["-20% lors de la premiere visite", "Carte de fidelité"]

export default function Promotion() {
  return (
    <>
    <Swiper
    className='bg-black text-white swiper-container-promotion'
    loop={true}
    direction='horizontal'
    modules={[Autoplay, Navigation]}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    navigation={true}
    >
      {promotion.map((promotion) => (
      <SwiperSlide><h3 className='p-2 text-center'>{promotion}</h3></SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}
