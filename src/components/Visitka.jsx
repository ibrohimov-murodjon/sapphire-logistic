import { Clock, facebook, Instagram, Linkedin, Location, Twitter, YouTube } from "../assets";

const Visitka = () => {
  return (
    <div id="visitka" className="flex items-center">
      <div className="myContainer flex items-center justify-between">
        <span className="flex items-center gap-x-1">
          <img src={Clock} className="w-5 h-5" alt="" />
          <small className="flex items-center">
            <h4 className="font-bold">Opening Hours:</h4>
            <p>Mon-Fri 6am to 11am > Closed on Weekends</p>
          </small>
        </span>
        <div className="flex items-center gap-x-16">
          <span className="flex items-center gap-x-1">
            <img src={Location} className="w-5 h-5" alt="" />
            <small className="flex items-center gap-x-2">
              <h4 className="font-bold text-[14px]">Location Near you:</h4>
              <p className="text-gray-600 font-bold text-[14px]"> New York</p>
            </small>
          </span>
          <ul className="flex items-center gap-x-3">
            <li className="uppercase text-white">Reach us:</li>
            <li>
              <img src={facebook} className="w-5 h-5" alt="" />
            </li>
            <li>
              <img src={Instagram} className="w-5 h-5" alt="" />
            </li>
            <li>
              <img src={Linkedin} className="w-5 h-5" alt="" />
            </li>
            <li>
              <img src={Twitter} className="w-5 h-5" alt="" />
            </li>
            <li>
              <img src={YouTube} className="w-5 h-5" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visitka;