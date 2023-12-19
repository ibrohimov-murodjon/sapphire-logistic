import { useState } from "react";
import { Slide, Fade, Bounce } from "react-awesome-reveal";
import {
  CallOperator,
  logo,
  close,
  burger,
  ServicesIcon,
  TruckTypesIcon,
  FAQIcon,
  ContactIcon,
  HomeIcon,
  AboutIcon,
} from "../assets";
import Button from "./Button";

const navLinks = [
  {
    name: "Home",
    to: "home",
    logo: HomeIcon,
  },
  {
    name: "About",
    to: "about",
    logo: AboutIcon,
  },
  {
    name: "Services",
    to: "services",
    logo: ServicesIcon,
  },
  {
    name: "Truck Types",
    to: "truckTypes",
    logo: TruckTypesIcon,
  },
  // {
  //   name: "FAQ",
  //   to: "faq",
  //   logo: FAQIcon,
  // },
  {
    name: "Contact",
    to: "contact",
    logo: ContactIcon,
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsopen] = useState(false);
  const handleMenu = (name) => {
    setActive(name);
    setIsopen(false);
  };
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <nav className="sticky-header relative shadow-2xl bg-black bg-opacity-30 backdrop-filter backdrop-blur-md pt-3 tabletLgMd:pt-0">
        <Fade delay={1000}>
          <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-between pt-3 tabletLgMax:pt-6">
            <a href="#" className="w-[50%] desktop:w-[25%] tabletLgMax:w-full ">
              <img src={logo} className="w-30 h-10" alt="" />
            </a>
            <div className="w-full flex space-x-6 items-center tabletLgMax:hidden">
              {navLinks.map((link, index) => (
                <a
                  href={`/#${link.to}`}
                  key={index}
                  className="nav relative text-white font-bold hover:text-[#ED3237]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="w-full flex items-center gap-x-4 tabletLgMax:justify-end">
              <div className="flex items-center w-full max-w-[200px] gap-x-3 tabletLgMax:gap-x-0">
                <img
                  src={CallOperator}
                  className="w-14 h-14 p-3 rounded-full bg-gray-300 tabletLgMax:ml-auto"
                  alt=""
                />
                <span className="flex items-center flex-col w-full max-w-[150px] tabletLgMax:hidden">
                  <h6 className="w-full max-w-[150px]">Call Us anytime</h6>
                  <a className="w-full max-w-[150px]" href="tel:+998941213399">
                    +998 94 1213399
                  </a>
                </span>
              </div>
              <a href="#contact">
                <Button bgColor="#3E4095" title="Request a quote" hidden />
              </a>
              <img
                src={burger}
                alt="menu"
                className="hidden w-[28px] h-[28px] object-contain tabletLgMax:block"
                onClick={ToggleSidebar}
              />
            </div>
          </div>
        </Fade>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0 text-xl font-bold">Sapphire Transportation</h4>
            <div
              className="btn btn-primary rounded-sm p-1 cursor-pointer"
              onClick={ToggleSidebar}
            >
              <img
                src={close}
                alt="close icon"
                className="w-[22px] h-[22px] object-contain"
              />
            </div>
          </div>
          <div className="sd-body flex flex-col">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer gap-x-4 mb-4  p-4 rounded-full mx-3 ${
                  active === link.name
                    ? "bg-white bg-opacity-30 backdrop-filter backdrop-blur-md"
                    : "hover:bg-white hover:bg-opacity-30 hover:backdrop-filter"
                }`}
                onClick={() => handleMenu(link.name)}
              >
                <img src={link.logo} alt="" className="w-[28px]" />
                <a
                  href={`/#${link.to}`}
                  key={index}
                  className="relative text-white font-bold text-xl"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
};

export default Navbar;
