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

const TruckTypes = () => {
  const [name, setName] = useState(1);
  const [price, setPrice] = useState("1");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handlePrice = (e) => {
    const enteredValue = e.target.value;

    if (enteredValue === "") {
      // If the entered value is an empty string, clear the error and set the value to empty
      setShowErrorMessage(false);
      setPrice("");
    } else if (!/^\d+$/.test(enteredValue)) {
      // If the entered value is not a number
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      setPrice(enteredValue);
    }
  };

  return (
    <div className="bg-[#3e4095]" id="truckTypes">
      <h1 className="text-center text-5xl font-bold py-12">Truck Types</h1>
      <div className="myContainer mx-auto pb-28">
        <div className="relative flex max-w-[80%] lightBlue shadow-lg rounded-t-lg mx-auto mt-4 mobileLg:flex-col mobileLg:items-center mobileLg:h-fit">
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
          <div className="group-[1]: bg-[#5D3E85] w-[40%] pb-8 flex flex-col items-center rounded-tr-lg mobileLg:w-full mobileLg:h-[330px] mobileLg:rounded-none mobileLg:pt-0">
            <div class="relative float-label-input pt-[40px] mobileLg:mt-0 ">
              <input
                type="text"
                id="name"
                maxLength={7}
                placeholder=" "
                class={`w-[240px] bg-white text-[#242525] focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-4 px-3 block appearance-none leading-normal  maxSm:max-w-[200px]  mobileMax:max-w-[170px] mobileMax:py-3 
               focus:border-blue-400 ${
                  name === 4 ? "hidden" : ""
                }`}
                onChange={(e) => handlePrice(e)}
                value={price}
              />
              <label
                for="name"
                class={`absolute top-[55px] left-[5px] text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker ${
                  name === 4 ? "hidden" : ""
                }`}
              >
                Miles
              </label>
              {showErrorMessage && (
                <span className="text-[#FF0000] font-bold pt-2">
                  Only numbers
                </span>
              )}
            </div>
            <div className="lightBlue h-[1px] w-full mt-4"></div>
            <div className="pt-[28px] desktopMin:flex desktopMin:items-center desktopMin:justify-center desktopMin:flex-col desktopMin:pl-4">
              <span className={`${name === 4 ? "hidden" : ""}`}>
                Total Payment
              </span>
              <h1 className="text-5xl font-bold pt-[28px] max-w-[300px] leading-tight w-full desktopMin:text-4xl mobileMax:text-2xl mobileLg:text-center">
                {name === 1
                  ? `$ ${(footerData[0].fromPrice * Number(price)).toFixed(
                      2
                    )} - $ ${(footerData[0].toPrice * Number(price)).toFixed(
                      2
                    )}`
                  : name === 2
                  ? `$ ${(footerData[1].fromPrice * Number(price)).toFixed(
                      2
                    )} - $ ${(footerData[1].toPrice * Number(price)).toFixed(
                      2
                    )}`
                  : name === 3
                  ? `$ ${(footerData[2].fromPrice * Number(price)).toFixed(
                      2
                    )} - $ ${footerData[2].toPrice * Number(price).toFixed(2)}`
                  : ""}
              </h1>
            </div>
          </div>
        </div>
        <ul className="flex items-center flex-wrap justify-center gap-x-3 max-w-[80%] mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-bl-lg rounded-br-lg desktopMin:hidden">
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

export default TruckTypes;
