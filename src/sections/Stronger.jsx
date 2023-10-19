import { Box, Money, Truck } from '../assets';
import StackImg from '../assets/stack-img.png'



const Stronger = () => {
  return (
    <div className="bg-blue-50">
      <div className="myContainer flex items-start justify-between pt-20 pb-16">
        <div className="flex flex-col ">
          <p className="uppercase mb-2">Why choose sapphire</p>
          <h1 className="text-[40px] font-bold w-full max-w-[450px] leading-normal mb-6">
            Well keep your items damage free
          </h1>
          <ul />
          <ul className="flex items-center flex-col gap-y-10">
            <li className="flex items-start gap-x-5">
              <img src={Money} className="w-14 h-14 p-3 bg-yellow-400 rounded-full" alt="" />
              <span>
                <h3 className="text-[25px] font-bold capitalize">
                  cost-effective operation
                </h3>
                <p className="w-full max-w-[450px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  culpa esse in suscipit eaque perferendis?
                </p>
              </span>
            </li>
            <li className="flex items-start gap-x-5">
              <img src={Truck} className="w-14 h-14 p-3 bg-yellow-400 rounded-full" alt="" />
              <span>
                <h3 className="text-[25px] font-bold capitalize">
                  cost-effective operation
                </h3>
                <p className="w-full max-w-[450px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  culpa esse in suscipit eaque perferendis?
                </p>
              </span>
            </li>
            <li className="flex items-start gap-x-5">
              <img src={Box} className="w-14 h-14 p-3 bg-yellow-400 rounded-full" alt="" />
              <span>
                <h3 className="text-[25px] font-bold capitalize">
                  cost-effective operation
                </h3>
                <p className="w-full max-w-[450px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  culpa esse in suscipit eaque perferendis?
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="relative">
            <img src={StackImg} className="w-[500px] rounded-[5px] h-[300px]" alt="" />
            <span className="flex items-center justify-center border-dashed border-[2px] w-full max-w-[350px] bg-slate-700 border-blue-200 text-center gap-x-1 p-2 rounded-bl-[25px] rounded-tr-[25px] absolute bottom-[-40px] left-[50%] translate-x-[-50%]">
              <p className="text-[60px] text-yellow-400">25+</p>
              <p className="text-[30px] capitalize text-white leading-8">
                years of experience
              </p>
            </span>
          </div>
          <div className="skill-main mt-20">
            <div className="skill-bar mt-4">
              <div className="info">
                <p className="font-bold mb-2">Shipping by Road</p>
                <p className="persent">92%</p>
              </div>
              <div className="bar">
                <span className="oneAnime"></span>
              </div>
            </div>
            <div className="skill-bar mt-4">
              <div className="info">
                <p className="font-bold mb-2">Pallet Freight Shipping</p>
                <p className="persent">85%</p>
              </div>
              <div className="bar">
                <span className="twoAnime"></span>
              </div>
            </div>
            <div className="skill-bar mt-4">
              <div className="info">
                <p className="font-bold mb-2">Intermodal Shipping</p>
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
