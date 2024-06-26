import { Slide } from "react-awesome-reveal";
import { Clock, Location } from "../assets";

const Visitka = () => {
  return (
    <div
      className="team h-[80px] flex items-center mobileMax:h-[100px]"
      id="home"
    >
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-between mobileMax:flex-wrap mobileMax:gap-y-4">
        <Slide direction="left" duration={2500}>
          <span className="flex items-center gap-x-1">
            <img src={Clock} className="w-5 h-5" alt="" />
            <small className="flex items-center gap-x-2">
              <h4 className="font-bold text-[12px]">Working hours:</h4>
              <p className="text-[12px]">
                Available every day of the year 24 / 7 / 52
              </p>
            </small>
          </span>
        </Slide>
        <Slide direction="right" duration={2500}>
          <div className="flex items-center gap-x-16 tabletLgMd:flex-col tabletLgMax:gap-y-2">
            <span className="flex items-center gap-x-1">
              <img src={Location} className="w-5 h-5" alt="" />
              <small className="flex items-center gap-x-2">
                <h4 className="font-bold text-[14px]">Location:</h4>
                <p className="font-bold text-[14px]">
                  570 Le Parc CIR, Buffalo Grove, IL 60089
                </p>
              </small>
            </span>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Visitka;
