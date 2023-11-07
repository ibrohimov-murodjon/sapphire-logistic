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
        mousewheel={true}
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
          <div className="flex myContainer flex-col w-full ">
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
        {/* <SwiperSlide className="slider2 ">
          <div className="flex myContainer flex-col w-full ">
            <span className=" border-[3px] mb-2  border-[orange] bg-gray-300 px-5 w-full max-w-[250px] text-center py-1 rounded-3xl text-[10px] text-orange-400 font-bold uppercase">
              Welcome to sapphire logistic
            </span>
            <h1 className="flex flex-wrap leading-[80px] items-center  text-[64px] font-bold text-white w-full max-w-[450px] mb-2 ">
              World <span className="hero-text">class</span>Transportation
            </h1>
            <p className="text-white w-full max-w-[650px] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloribus beatae neque cumque nihil qui asperiores eaque, vitae
              voluptas pariatur similique et.
            </p>
            <span className="flex items-center gap-3">
              <Button title="Get Started" bgColor="yellow" color="black" />
              <Button title="Get a Quote" bgColor="transparent" color="white" />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider3">
          <div className="flex myContainer flex-col w-full ">
            <span className=" border-[3px] mb-2  border-[orange] bg-gray-300 px-5 w-full max-w-[250px] text-center py-1 rounded-3xl text-[10px] text-orange-400 font-bold uppercase">
              Welcome to sapphire logistic
            </span>
            <h1 className="flex flex-wrap leading-[80px] items-center  text-[64px] font-bold text-white w-full max-w-[450px] mb-2 ">
              World <span className="hero-text">class</span>Transportation
            </h1>
            <p className="text-white w-full max-w-[650px] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloribus beatae neque cumque nihil qui asperiores eaque, vitae
              voluptas pariatur similique et.
            </p>
            <Button title="Get Started" bgColor="yellow" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
