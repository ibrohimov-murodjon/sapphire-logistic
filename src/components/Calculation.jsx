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
    <div className=" py-[30px] px-[50px] calculation-slider">
      <div className="flex flex-col">
        <h1 className="text-4xl text-black font-semibold">{data?.name}</h1>
        <span className="text-[#242525] pt-[25px]">Per mile</span>
        <span className="text-[#242525] pt-[25px] text-2xl font-bold pb-[10px]">
          {`$ ${data?.fromPrice} - $ ${data?.toPrice}`}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[#242525] text-[14px]">Quick pay included</span>
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
          <img src={ArrowIcon} alt="arrow left" />
        </button>
        <span className="text-[#242525] text-[24px] font-bold">{`0${data.id} / 4`}</span>
        <button onClick={next}>
          <img className="arrow-right" src={ArrowIcon} alt="arrow left" />
        </button>
      </div>
    </div>
  );
}

export default Calculation;