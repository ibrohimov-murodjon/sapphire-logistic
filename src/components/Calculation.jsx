import React from "react";
import { DoneIcon, SmallTruck, ArrowIcon } from "../assets";

function Calculation({ data, setName, name }) {
  const next = () => {
    if (name < 4) {
      setName(name + 1);
    }
  };

  const prev = () => {
    if (name > 1) {
      setName(name - 1);
    }
  };

  return (
    <div className=" py-[30px] px-[50px] calculation-slider mobileLg:flex mobileLg:flex-col mobileLg:items-center">
      <div className="flex flex-col mobileLg:items-center mobileLg:justify-center ">
        <h1 className="text-4xl font-semibold mobileLg:text-3xl mobileLg:text-center w-full  mobileLg:max-w-[300px]">
          {data?.name}
        </h1>
        <span className=" pt-[25px]">Per mile</span>
        <span className=" pt-[25px] text-2xl font-bold pb-[10px]">
          {`$ ${data?.fromPrice} - $ ${data?.toPrice}`}
        </span>
        <div className="flex items-center gap-2">
          <span className=" text-[14px]">Quick pay included</span>
          <img src={DoneIcon} alt="done icon" className="w-[18px] h-[18px]" />
        </div>
        <img
          src={data?.img}
          alt="semi truck"
          className="max-w-[300px] object-cover h-full mt-6"
        />
      </div>
      <div className="flex items-center gap-4 mt-10">
        <button onClick={prev}>
          <img src={ArrowIcon} alt="arrow left" className="w-8" />
        </button>
        <span className=" text-[24px] font-bold mobileLg:w-full mobileLg:text-[14px] mobileLg:max-w-[50px] mobileLg:text-center mobileMd:text-[10px]">{`0${data.id} / 4`}</span>
        <button onClick={next}>
          <img className="arrow-right w-8" src={ArrowIcon} alt="arrow left" />
        </button>
      </div>
    </div>
  );
}

export default Calculation;
