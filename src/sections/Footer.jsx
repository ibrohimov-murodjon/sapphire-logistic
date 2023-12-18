import CalculatorLogo from "../assets/calculator.svg";
import { CallImgWhite, EmailIcon, Clock, LocationWhite } from "../assets";

const navLinks = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Services",
    to: "services",
  },
  {
    name: "Truck Types",
    to: "truckTypes",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const Footer = () => {
  return (
    <div className="pt-10 bg-[#3e4095]">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] pb-2">
        <div className="flex items-start justify-between mobileMax:flex-col mobileMax:justify-center mobileMax:items-center">
          <div className="flex items-start flex-col mobileMax:justify-center mobileMax:items-center ">
            <a
              className="flex items-center gap-x-2 py-3 px-6 text-[16px] font-bold  rounded-[25px] mb-3 team shadow-xl"
              href="#truckTypes"
            >
              <span>Calculate the cost</span>
              <img src={CalculatorLogo} className="w-6 h-6" alt="" />
            </a>
            <p className="w-full max-w-[420px] pt-4 tabletMax:max-w-[300px] tabletMax:pb-4 mobileMax:max-w-[500px] mobileMax:text-center">
              Our transportation costs are tailored to each shipment, taking
              into account factors such as weight, cargo dimensions, departure,
              and destination details. For precise information on the
              transportation cost you require, kindly reach out to our dedicated
              managers or conveniently fill out a specialized form. Rest
              assured, we aim to respond to your inquiry within an hour.
            </p>
          </div>
          <ul className="flex items-start flex-col tabletMax:hidden">
            <h4 className="font-bold text-[20px] pb-4">Menu</h4>
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="font-bold uppercase mb-2 hover:text-[#ED3237]"
                href={`#${link.to}`}
              >
                {link.name}
              </a>
            ))}
          </ul>
          <div className="flex items-start flex-col mobileMax:items-center mobileMax:mb-8">
            <span className="flex items-center gap-x-2 pb-3">
              <img src={LocationWhite} className="w-5 h-5" alt="" />
              <p className="text-[15px] font-bold max-w-[350px] ">
                1019 THORNDALE CT UNIT A2, WHEELING, IL 60641
              </p>
            </span>
            <span className="flex items-center gap-x-2 pb-4">
              <img src={CallImgWhite} className="w-5 h-5" alt="" />
              <a href="tel:+1 (224) 313-0103" className="font-bold text-[15px]">
                +1 (224) 313-0103
              </a>
            </span>
            <span className="flex items-center gap-x-2 pb-4">
              <img src={Clock} className="w-5 h-5" alt="" />
              <p>
                WORKING HOURS :{" "}
                <span className="font-bold pl-1 text-[15px]">
                  {" "}
                  24 / 7 / 52{" "}
                </span>
              </p>
            </span>
            <span className="flex items-center gap-x-2">
              <img src={EmailIcon} className="w-5 h-5" alt="" />
              <a
                href="mailto:INFO@EZTRANSGROUP.COM"
                className="font-bold text-[15px]"
              >
                INFO@EZTRANSGROUP.COM
              </a>
            </span>
          </div>
        </div>
        <ul className="tabletMax:flex items-start justify-evenly mb-4 mt-2 hidden">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="font-bold uppercase hover:text-[#ED3237]"
              href={`#${link.to}`}
            >
              {link.name}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
