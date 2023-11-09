import {
  Clock,
  facebook,
  Instagram,
  Linkedin,
  Location,
  Twitter,
  YouTube,
} from "../assets";

const Visitka = () => {
  return (
    <div className="team h-[80px] flex items-center">
      <div className="myContainer mx-auto flex items-center justify-between">
        <span className="flex items-center gap-x-1">
          <img src={Clock} className="w-5 h-5" alt="" />
          <small className="flex items-center">
            <h4 className="font-bold">Opening Hours:</h4>
            <p>
              Mon-Fri 6am to 11am <span>&gt;</span> Closed on Weekends
            </p>
          </small>
        </span>
        <div className="flex items-center gap-x-16">
          <span className="flex items-center gap-x-1">
            <img src={Location} className="w-5 h-5" alt="" />
            <small className="flex items-center gap-x-2">
              <h4 className="font-bold text-[14px]">Location Near you:</h4>
              <p className="font-bold text-[14px]"> New York</p>
            </small>
          </span>
          <ul className="flex items-center gap-x-3">
            <li className="uppercase text-white">Reach us:</li>
            <a href="https://facebook.com">
              <img src={facebook} className="w-5 h-5" alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={Instagram} className="w-5 h-5" alt="" />
            </a>
            <a href="https://linkedin.com">
              <img src={Linkedin} className="w-5 h-5" alt="" />
            </a>
            <a href="https://twiter.com">
              <img src={Twitter} className="w-5 h-5" alt="" />
            </a>
            <a href="https://youtube.com">
              <img src={YouTube} className="w-5 h-5" alt="" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visitka;
