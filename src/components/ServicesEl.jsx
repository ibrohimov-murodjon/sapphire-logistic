// import { AirplaneSectionImg, CallImg, RightArrow } from "../assets";
// import { Button } from "../components";

const ServicesEl = ({ data }) => {
  return (
    <div className="flex items-start justify-around mt-9 h-[400px] overflow-y-hidden gap-x-8 mobileMax:flex-col mobileMax:items-center mobileMax:h-fit">
      <span className=" rounded-[25px] mobileMax:mb-2">
      <img src={data.img} className="w-[480px] h-[370px] mobileMax:w-[500px] mobileMax:h-[300px] mobileLg:h-[280px] mobileMd:h-[210px]" />
      </span>
      <span className="w-full max-w-[1px] bg-white h-[800px] mobileMax:hidden"></span>
      <span>
        <p className="uppercase mobileMax:text-center">Explore Sapphire Features</p>
        <h3 className="font-bold text-[35px]  w-full max-w-[450px] mb-3 leading-10 maxSm:text-[30px] mobileMax:text-center">
          {data.title}
        </h3>
        <p className="w-full max-w-[450px] text-[17px] text-gray-500 maxSm:text-[15px] mobileMax:text-center">
          {data.text}
        </p>
      </span>
    </div>
  );
};

export default ServicesEl;
