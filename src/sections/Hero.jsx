import { Swiper, SwiperSlide } from "swiper/react";
import { Navbar } from "../components";

// import required modules
import { Autoplay, Mousewheel, EffectFade, Pagination } from "swiper/modules";
import { Button } from "../components";

export default function Hero() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        effect={"fade"}
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
        <SwiperSlide className="slider1 hero-swiper">
          <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <span className=" border-[1px] mb-2  border-[#ED3237] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase">
              Welcome to sapphire transportation
            </span>
            <h1 className="flex flex-wrap leading-[80px] items-center  text-[64px] font-bold text-white w-full max-w-[450px] mb-2 ">
              World class Transportation
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloribus beatae neque cumque nihil qui asperiores eaque, vitae
              voluptas pariatur similique et.
            </p>
            <Button title="Get Started" textClr="white" bgColor="#3E4095" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider2 hero-swiper">
          <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <span className=" border-[1px] mb-2  border-[#ED3237] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase">
              Welcome to sapphire transportation
            </span>
            <h1 className="flex flex-wrap leading-[80px] items-center  text-[64px] font-bold text-white w-full max-w-[450px] mb-2 ">
              World class Transportation
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloribus beatae neque cumque nihil qui asperiores eaque, vitae
              voluptas pariatur similique et.
            </p>
            <Button title="Get Started" textClr="white" bgColor="#3E4095" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider3 hero-swiper">
          <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <span className=" border-[1px] mb-2  border-[#ED3237] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase">
              Welcome to sapphire transportation
            </span>
            <h1 className="flex flex-wrap leading-[80px] items-center  text-[64px] font-bold text-white w-full max-w-[450px] mb-2 ">
              World class Transportation
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloribus beatae neque cumque nihil qui asperiores eaque, vitae
              voluptas pariatur similique et.
            </p>
            <Button title="Get Started" textClr="white" bgColor="#3E4095" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
