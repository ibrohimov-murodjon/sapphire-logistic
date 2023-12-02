import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Mousewheel, EffectFade, Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div className="relative flex flex-col">
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
            <h1 className="flex flex-wrap leading-[70px] items-center  text-[56px] font-bold text-white w-full italic max-w-[650px] mb-2 mobileMax:text-[50px] mobileMax:leading-[60px] mobileLg:text-[40px] mobileLg:leading-[45px] mobileMd:text-[30px] mobileMd:leading-[35px]">
              RUNNING ON THE POWER OF{" "}
              <span className="text-[#ED3237] pr-4 underline underline-offset-4">
                PROMISES
              </span>{" "}
              KEPT
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4 mobileLg:text-[15px] mobileLg:mt-4 mobileLg:max-w-[400px]">
              Our priority relies on ensuring your packages reach their
              destination in record time, bringing you unparalleled speed and
              reliability.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider3 hero-swiper z-[12]">
          <div className="flex mx-auto w-full max-w-[1246px] px-[20px] flex-col">
            <h1 className="flex flex-wrap leading-[70px] items-center  text-[56px] font-bold text-white w-full italic max-w-[650px] mb-2 mobileMax:text-[50px] mobileMax:leading-[60px] mobileLg:text-[40px] mobileLg:leading-[45px] mobileMd:text-[30px] mobileMd:leading-[35px]">
              RUNNING ON THE POWER OF
              <span className="text-[#ED3237] pr-4 underline underline-offset-4">
                PROMISES
              </span>
              KEPT
            </h1>
            <p className="text-white w-full max-w-[650px] mb-4 mobileLg:text-[15px] mobileLg:mt-4 mobileLg:max-w-[400px]">
              Our priority relies on ensuring your packages reach their
              destination in record time, bringing you unparalleled speed and
              reliability.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
