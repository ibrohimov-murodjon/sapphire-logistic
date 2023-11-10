import { useEffect, useRef, useState } from "react";
import { CallOperator, logo } from "../assets";
import Button from "./Button";

const navLinks = [
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
    name: "FAQ",
    to: "faq",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleMenu = (name) => {
    setActive(name);
    setToggle(false);
  };

  const burgerMenuRef = useRef(null);

  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (toggle) {
        setToggle(false);
      }
    };

    const closeMenuOnTouch = (e) => {
      if (
        toggle &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        setToggle(false);
      }
    };

    const closeMenuOnClickOutside = (e) => {
      if (
        toggle &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("scroll", closeMenuOnScroll);
      document.addEventListener("touchstart", closeMenuOnTouch);
      document.addEventListener("click", closeMenuOnClickOutside);
    }

    return () => {
      document.removeEventListener("scroll", closeMenuOnScroll);
      document.removeEventListener("touchstart", closeMenuOnTouch);
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, [toggle]);

  const handleBurgerClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    setToggle(!toggle);
  };
  return (
    <nav className="sticky-header relative shadow-2xl bg-black bg-opacity-30 backdrop-filter backdrop-blur-md pt-3 tabletLgMd:pt-0">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-between pt-3">
        <a href="#" className="w-full desktopLg:w-[50%]">
          <img src={logo} className="w-30 h-10" alt="" />
        </a>
        <div className=" w-full flex space-x-6 ml-[-80px] items-center">
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
        <div className="w-full flex items-center gap-x-4">
          <div className="flex items-center w-full max-w-[200px] gap-x-3">
            <img
              src={CallOperator}
              className="w-14 h-14 p-3 rounded-full bg-gray-300"
              alt=""
            />
            <span className="flex items-center flex-col w-full max-w-[150px]">
              <h6 className="w-full max-w-[150px]">Call Us anytime</h6>
              <a className="w-full max-w-[150px]" href="tel:+998941213399">
                +998 94 1213399
              </a>
            </span>
          </div>
          <Button bgColor="#3E4095" title="Request a quote" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
