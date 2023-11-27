import {
  AboutSlide1,
  AboutSlide2,
  AboutSlide3,
  AboutSlide4,
  AboutSlide5,
} from "../assets";

const AboutData = [
  { id: 1, img: AboutSlide1 },
  { id: 2, img: AboutSlide2 },
  { id: 3, img: AboutSlide3 },
  { id: 4, img: AboutSlide4 },
  { id: 5, img: AboutSlide5 },
  { id: 6, img: AboutSlide1 },
  { id: 7, img: AboutSlide2 },
  { id: 8, img: AboutSlide3 },
  { id: 9, img: AboutSlide4 },
  { id: 10, img: AboutSlide5 },
  { id: 11, img: AboutSlide1 },
  { id: 12, img: AboutSlide2 },
  { id: 13, img: AboutSlide3 },
  { id: 14, img: AboutSlide4 },
  { id: 15, img: AboutSlide5 },
  { id: 15, img: AboutSlide1 },
  { id: 17, img: AboutSlide2 },
  { id: 43, img: AboutSlide3 },
  { id: 44, img: AboutSlide4 },
  { id: 55, img: AboutSlide5 },
];

const About = () => {
  return (
    <div className="about pt-20 pb-11  relative h-[550px] mobileMax:h-[650px] mobileLg:h-[710px] mobileMd:h-[760px]">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-start justify-around gap-x-10 mobileMax:flex-col mobileLg:items-center">
        <div className="flex items-center flex-col mobileMax:flex-row mobileMax:justify-between mobileMax:gap-x-12 mobileMax:mb-12 mobileLg:flex-col-reverse mobileLg:items-center">
          <img
            src=""
            className="w-[300px] h-[200px] border"
            alt="about Truck"
          />
          <span className="flex items-start flex-col mt-6 mobileLg:items-center">
            <h3 className="font-bold text-[30px] mobileMax:text-[24px] mobileMax:text-center mobileLg:text-center mobileLg:text-3xl mobileLg:mb-2">
              Explore Sapphire:
            </h3>
            <p className="text-[17px] font-semibold w-full max-w-[260px] mobileMax:text-[13px] mobileLg:max-w-[300px] mobileLg:mb-4 mobileLg:text-center">
              Access 24/7 guidance from dedicated transportation managers and
              experts for personalized advice and support.
            </p>
          </span>
        </div>
        <div className="flex items-start flex-col mobileMax:items-center mobileMax:text-center mobileMax:mb-4">
          <h1 className="text-[40px] font-bold w-full max-w-[730px] leading-[50px] mobileMax:text-[35px] mobileLg:text-2xl">
            Sapphire Transportation: Effortless Logistics, Exceptional Service.
            Your shipments, our commitment – delivering excellence,{" "}
            <span className="underline underline-offset-4 ">every time.</span>
          </h1>
          {/* <p className="text-[17px] w-full max-w-[550px] mobileLg:text-base">
            Sapphire Truckload service delivers the knowledge and opportunity to
            optimize every mile on every lane.
          </p> */}
        </div>
      </div>
      <div className="marquee mt-5">
        <div className="marquee__group ">
          {AboutData.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                className="rounded-lg inline-block mr-5 object-cover maxSm:mr-0"
              />
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="marquee__group">
          {AboutData.map((item) => (
            <div key={item.id}>
              <img
                key={item.id}
                src={item.img}
                className="rounded-lg inline-block object-cover mr-5 maxSm:mr-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
