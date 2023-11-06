import { AirplaneSectionImg, CallImg, RightArrow } from "../assets";
import { Button } from "../components";

const ServicesEl = ({ data }) => {
  return (
    <div className="flex items-start justify-around mt-9">
      <img src={data.img} className="w-[480px] h-[370px]" />
      <span>
        <p className="uppercase ">Explore Sapphire Features</p>
        <h3 className="font-bold text-[25px] w-full max-w-[350px] mb-3 leading-7">
          {data.title}
        </h3>
        <p className="w-full max-w-[450px] text-[17px] text-gray-500">
          {data.text}
        </p>
        <span className="flex flex-col flex-wrap h-[80px] justify-between my-2">
          {data.advantage.map((e) => {
            console.log(e);
            return (
              <li className="list-none flex items-center gap-x-1" key={e.id}>
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">{e.title}</h6>
              </li>
            );
          })}
        </span>
        <hr className="my-7" />
        <span className="flex justify-around">
          <Button title="Get A Quote" bgColor="transparent" color="black" />
          <span className="flex items-center gap-x-2">
            <span className="bg-[#f7c503] rounded-full p-3">
              <img src={CallImg} className="w-6 h-5  " />
            </span>
            <small className="flex flex-col  ">
              <h6 className="font-bold text-[17px]">Have Questions?</h6>
              <a className="text-gray-600 text-[17px]" href="tel:+998941213399">
                +998941213399
              </a>
            </small>
          </span>
        </span>
      </span>
    </div>
  );
};

export default ServicesEl;
