
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, Mousewheel, EffectFade, Pagination } from 'swiper/modules';
import { Button } from '../components';

export default function Hero() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className='slider1 '>
            <div className="flex myContainer flex-col w-full ">
            <span className=' border-[3px] mb-2  border-[orange] bg-gray-300 px-5 w-full max-w-[250px] text-center py-1 rounded-3xl text-[10px] text-orange-400 font-bold uppercase'>
                Welcome to sapphire logistic
            </span>
            <h1 className='flex flex-wrap leading-[80px] items-center  text-[80px] font-bold text-white w-full max-w-[450px] mb-2 '>
                World <span className='hero-text'>class</span>Transportation
            </h1>
            <p className='text-white w-full max-w-[650px] mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus beatae neque cumque nihil qui asperiores eaque, vitae voluptas pariatur similique et dolor ex quod aliquid cupiditate assumenda doloremque ipsa dolorum, ratione possimus ab saepe recusandae. Eos molestiae hic perspiciatis odit nostrum saepe maxime dolor doloribus, aliquid corrupti quam doloremque.
            </p>
            <Button title='Get Started' bgColor='yellow'/>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slider2 '>
        <div className="flex myContainer flex-col w-full ">
            <span className=' border-[3px] mb-2  border-[orange] bg-gray-300 px-5 w-full max-w-[250px] text-center py-1 rounded-3xl text-[10px] text-orange-400 font-bold uppercase'>
                Welcome to sapphire logistic
            </span>
            <h1 className='flex flex-wrap leading-[80px] items-center  text-[80px] font-bold text-white w-full max-w-[450px] mb-2 '>
                World <span className='hero-text'>class</span>Transportation
            </h1>
            <p className='text-white w-full max-w-[650px] mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus beatae neque cumque nihil qui asperiores eaque, vitae voluptas pariatur similique et dolor ex quod aliquid cupiditate assumenda doloremque ipsa dolorum, ratione possimus ab saepe recusandae. Eos molestiae hic perspiciatis odit nostrum saepe maxime dolor doloribus, aliquid corrupti quam doloremque.
            </p>
            <span className="flex items-center gap-3">
            <Button title='Get Started' bgColor='yellow' color="black"/>
            <Button title='Get a Quote' bgColor='transparent' color="white" />
            </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slider3'>
        <div className="flex myContainer flex-col w-full ">
            <span className=' border-[3px] mb-2  border-[orange] bg-gray-300 px-5 w-full max-w-[250px] text-center py-1 rounded-3xl text-[10px] text-orange-400 font-bold uppercase'>
                Welcome to sapphire logistic
            </span>
            <h1 className='flex flex-wrap leading-[80px] items-center  text-[80px] font-bold text-white w-full max-w-[450px] mb-2 '>
                World <span className='hero-text'>class</span>Transportation
            </h1>
            <p className='text-white w-full max-w-[650px] mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus beatae neque cumque nihil qui asperiores eaque, vitae voluptas pariatur similique et dolor ex quod aliquid cupiditate assumenda doloremque ipsa dolorum, ratione possimus ab saepe recusandae. Eos molestiae hic perspiciatis odit nostrum saepe maxime dolor doloribus, aliquid corrupti quam doloremque.
            </p>
            <Button title='Get Started' bgColor='yellow'/>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
