import { Swiper, SwiperSlide } from "swiper/react";
import { Navbar } from "../components";

// import required modules
import { Autoplay, Mousewheel, EffectFade, Pagination } from "swiper/modules";
import { Button } from "../components";

export default function Hero() {
  return (
    <div className="relative flex flex-col">
{/* <div class="absolute w-full h-[700px] z-[10] bg-bgVideo"></div> */}
      <Swiper
        direction={"horizontal"}
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
        <SwiperSlide className="slider1 hero-swiper z-[12]">
        <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <span className=" border-[1px] mb-2  border-[#ED3237] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase">
              Welcome to sapphire transportation
            </span>
            <h1 className="flex flex-wrap leading-[70px] items-center  text-[56px] font-bold text-white w-full italic max-w-[700px] mb-2 mobileMax:text-[50px] mobileMax:leading-[60px] mobileLg:text-[40px] mobileLg:leading-[45px] mobileMd:text-[30px] mobileMd:leading-[35px]">
              {/* Transportion and Freight Services in Chicago, Il */}
              Your Gateway to{" "}
              <span className="text-[#ED3237] pr-4 underline underline-offset-4">
                Seamless
              </span>{" "}
              Logistics!
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4 mobileLg:text-[15px] mobileLg:mt-4 mobileLg:max-w-[400px]">
              Experience swift and efficient logistics solutions with Sapphire
              Transportation, covering expedited truck shipments across the vast
              expanse of the USA and Canada. Our commitment lies in ensuring
              your packages reach their destination in record time, bringing you
              unparalleled speed and reliability.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider2 hero-swiper z-[12]">
        <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <span className=" border-[1px] mb-2  border-[#ED3237] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase">
              Welcome to sapphire transportation
            </span>
            <h1 className="flex flex-wrap leading-[70px] items-center  text-[56px] font-bold text-white w-full italic max-w-[700px] mb-2 mobileMax:text-[50px] mobileMax:leading-[60px] mobileLg:text-[40px] mobileLg:leading-[45px] mobileMd:text-[30px] mobileMd:leading-[35px]">
              {/* Transportion and Freight Services in Chicago, Il */}
              Your Gateway to{" "}
              <span className="text-[#ED3237] pr-4 underline underline-offset-4">
                Seamless
              </span>{" "}
              Logistics!
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4 mobileLg:text-[15px] mobileLg:mt-4 mobileLg:max-w-[400px]">
              Experience swift and efficient logistics solutions with Sapphire
              Transportation, covering expedited truck shipments across the vast
              expanse of the USA and Canada. Our commitment lies in ensuring
              your packages reach their destination in record time, bringing you
              unparalleled speed and reliability.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider3 hero-swiper z-[12]">
        <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <span className=" border-[1px] mb-2  border-[#ED3237] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase">
              Welcome to sapphire transportation
            </span>
            <h1 className="flex flex-wrap leading-[70px] items-center  text-[56px] font-bold text-white w-full italic max-w-[700px] mb-2 mobileMax:text-[50px] mobileMax:leading-[60px] mobileLg:text-[40px] mobileLg:leading-[45px] mobileMd:text-[30px] mobileMd:leading-[35px]">
              {/* Transportion and Freight Services in Chicago, Il */}
              Your Gateway to{" "}
              <span className="text-[#ED3237] pr-4 underline underline-offset-4">
                Seamless
              </span>{" "}
              Logistics!
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4 mobileLg:text-[15px] mobileLg:mt-4 mobileLg:max-w-[400px]">
              Experience swift and efficient logistics solutions with Sapphire
              Transportation, covering expedited truck shipments across the vast
              expanse of the USA and Canada. Our commitment lies in ensuring
              your packages reach their destination in record time, bringing you
              unparalleled speed and reliability.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
