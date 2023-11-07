import { Box, Money, Truck } from "../assets";
import StackImg from "../assets/stack-img.png";

const Stronger = () => {
  return (
    <div className="advantages">
      <div className="myContainer flex items-start justify-between pt-20 pb-16">
        <div className="flex flex-col ">
          <p className="uppercase mb-2 text-white">Why choose sapphire</p>
          <h1 className="text-[40px] text-white font-bold w-full max-w-[450px] leading-normal mb-6">
            Well keep your items damage free
          </h1>
          <ul />
          <ul className="flex items-center flex-col gap-y-10">
            <li className="flex items-start gap-x-5">
              <img
                src={Money}
                className="w-14 h-14 p-3 bg-[#ED3237] rounded-full"
                alt=""
              />
              <span>
                <h3 className="text-[25px] font-bold capitalize text-white">
                  cost-effective operation
                </h3>
                <p className="w-full max-w-[450px] text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  culpa esse in suscipit eaque perferendis?
                </p>
              </span>
            </li>
            <li className="flex items-start gap-x-5">
              <img
                src={Truck}
                className="w-14 h-14 p-3 bg-[#ED3237] rounded-full"
                alt=""
              />
              <span>
                <h3 className="text-[25px] font-bold capitalize text-white">
                  cost-effective operation
                </h3>
                <p className="w-full max-w-[450px] text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  culpa esse in suscipit eaque perferendis?
                </p>
              </span>
            </li>
            <li className="flex items-start gap-x-5">
              <img
                src={Box}
                className="w-14 h-14 p-3 bg-[#ED3237] rounded-full"
                alt=""
              />
              <span>
                <h3 className="text-[25px] font-bold capitalize text-white">
                  cost-effective operation
                </h3>
                <p className="w-full max-w-[450px] text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  culpa esse in suscipit eaque perferendis?
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="relative">
            <img
              src={StackImg}
              className="w-[500px] rounded-[5px] h-[300px]"
              alt=""
            />
          </div>
          <div className="skill-main mt-20">
            <div className="skill-bar mt-4">
              <div className="info">
                <p className="font-bold mb-2 text-white">Shipping by Road</p>
                <p className="persent">92%</p>
              </div>
              <div className="bar">
                <span className="oneAnime"></span>
              </div>
            </div>
            <div className="skill-bar mt-4">
              <div className="info">
                <p className="font-bold mb-2 text-white">
                  Pallet Freight Shipping
                </p>
                <p className="persent">85%</p>
              </div>
              <div className="bar">
                <span className="twoAnime"></span>
              </div>
            </div>
            <div className="skill-bar mt-4">
              <div className="info">
                <p className="font-bold mb-2 text-white">Intermodal Shipping</p>
                <p className="persent">75%</p>
              </div>
              <div className="bar">
                <span className="threeAnime"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stronger;
