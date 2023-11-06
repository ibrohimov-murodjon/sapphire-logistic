import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  DoneIcon,
  SemiTruck,
  ArrowIcon,
  SmallTruck,
  LargeTruck,
  SprinterVan,
} from "../assets";
import { Calculation } from "../components";

const footerData = [
  {
    id: 1,
    name: "Large Straight Truck",
    img: LargeTruck,
    link: "lgStraightTruck",
    fromPrice: 1.6,
    toPrice: 2.1,
  },
  {
    id: 2,
    name: "Small Straight Truck",
    img: SmallTruck,
    link: "smStraightTruck",
    fromPrice: 1.1,
    toPrice: 1.4,
  },
  {
    id: 3,
    name: "Sprinter Van",
    img: SprinterVan,
    link: "sprinterVan",
    fromPrice: 0.8,
    toPrice: 1,
  },
  {
    id: 4,
    name: "Semi Truck",
    img: SemiTruck,
    link: "semiTruck",
    fromPrice: "10%",
    toPrice: "13%",
  },
];

const Team = () => {
  const [name, setName] = useState(1);
  return (
    <div className="bg-[#3e4095]">
      <h1 className="text-center text-5xl font-bold py-12">Truck Types</h1>
      <div className="myContainer pb-28">
        <div className="relative flex max-w-[80%] lightBlue shadow-lg rounded-t-lg mx-auto mt-4">
          <div className="w-[60%]">
            {name === 1 ? (
              <Calculation setName={setName} name={name} data={footerData[0]} />
            ) : name === 2 ? (
              <Calculation setName={setName} name={name} data={footerData[1]} />
            ) : name === 3 ? (
              <Calculation setName={setName} name={name} data={footerData[2]} />
            ) : name === 4 ? (
              <Calculation setName={setName} name={name} data={footerData[3]} />
            ) : (
              ""
            )}
          </div>
          <div className="bg-[#5D3E85] w-[40%] flex flex-col items-center rounded-tr-lg">
            <div class="relative float-label-input pt-[40px]">
              <input
                type="number"
                id="name"
                placeholder=" "
                class="w-[240px] bg-white text-[#242525] focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-4 px-3 block appearance-none leading-normal focus:border-blue-400"
                max={1000000}
                min={1}
              />
              <label
                for="name"
                class="absolute top-[55px] left-[5px] text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker"
              >
                Miles
              </label>
            </div>
            <div className="lightBlue h-[1px] w-full mt-4"></div>
            <div className="pt-[28px]">
              <span>Total Payment</span>
              <h1 className="text-5xl font-bold pt-[28px]">
                {name === 1
                  ? `$ ${footerData[0].fromPrice} - $ ${footerData[0].toPrice}`
                  : name === 2
                  ? `$ ${footerData[1].fromPrice} - $ ${footerData[1].toPrice}`
                  : name === 3
                  ? `$ ${footerData[2].fromPrice} - $ ${footerData[2].toPrice}`
                  : name === 4
                  ? `$ ${footerData[3].fromPrice} - $ ${footerData[3].toPrice}`
                  : ""}
              </h1>
            </div>
          </div>
        </div>
        <ul className="flex items-center justify-center gap-x-3 max-w-[80%] mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-bl-lg rounded-br-lg">
          {footerData.map((e) => {
            const { id, name, img, link, fromPrice, toPrice } = e;
            return (
              <li
                onClick={() => setName(id)}
                key={id}
                className={`flex items-center flex-col w-full max-w-[336px]  py-[50px] px-3 cursor-pointer hover:shadow-xl`}
              >
                <img src={img} className="max-w-[200px] object-cover" />
                <p className="text-[#fff] text-[16px] font-bold text-center py-5">
                  {name}
                </p>
                <p className="text-[#242525] text-[16px] text-center">
                  Per mile
                </p>
                <span className="text-[#242525] pt-[25px] text-2xl font-bold pb-[10px]">
                  {`$ ${fromPrice} - $ ${toPrice}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Team;
