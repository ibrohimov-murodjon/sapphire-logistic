import { CallOperator, logo } from "../assets";
import Button from "./Button";

const navLinks = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Advantages",
    to: "advantages",
  },
  {
    name: "Our Team",
    to: "team",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky-header relative shadow-2xl bg-black bg-opacity-30 backdrop-filter backdrop-blur-md pt-3 tabletLgMd:pt-0">
      <div className="myContainer  mx-auto flex items-center justify-between pt-3">
        <a href="#" className="w-full">
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
