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
    <div className="team h-[80px] flex items-center" id="home">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-between">
        <span className="flex items-center gap-x-1">
          <img src={Clock} className="w-5 h-5" alt="" />
          <small className="flex items-center">
            <h4 className="font-bold">Opening Hours:</h4>
            <p>
              Mon-Fri 6am to 11am <span>&gt;</span> Closed on Weekends
            </p>
          </small>
        </span>
        <div className="flex items-center gap-x-16 tabletLgMd:flex-col tabletLgMax:gap-y-2">
          <span className="flex items-center gap-x-1">
            <img src={Location} className="w-5 h-5" alt="" />
            <small className="flex items-center gap-x-2">
              <h4 className="font-bold text-[14px]">Location Near you:</h4>
              <p className="font-bold text-[14px]"> New York</p>
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Visitka;
