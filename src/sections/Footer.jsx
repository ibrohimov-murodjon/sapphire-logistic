import { facebook, Instagram, Twitter, YouTube } from "../assets";

const Footer = () => {
  return (
    <div className="pt-10 bg-[#3e4095]">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] pb-2">
        <div className="flex items-start justify-between mobileMax:flex-col mobileMax:justify-center mobileMax:items-center">
          <div className="flex items-start flex-col mobileMax:justify-center mobileMax:items-center ">
            <a
              className="flex items-center gap-x-2 py-2 px-4 bg-red-300 rounded-[25px] mb-3"
              href=""
            >
              <button>Calculator go</button>
              <img src="" className="w-5 h-5" alt="" />
            </a>
            <p className="w-full max-w-[400px] tabletMax:max-w-[300px] tabletMax:pb-4 mobileMax:max-w-[500px] mobileMax:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dolorum excepturi quas voluptatibus molestias? Sapiente numquam
              enim totam debitis quas, facere eligendi id architecto sunt,
              perferendis expedita fugit ex deleniti praesentium quam cumque. A
              earum nihil id minus .
            </p>
          </div>
          <ul className="flex items-start flex-col tabletMax:hidden">
            <h4 className="font-bold text-[20px]">Menu</h4>
            <a className="font-bold" href="#about">
              About
            </a>
            <a className="font-bold" href="#services">
              Services
            </a>
            <a className="font-bold" href="#truckTypes">
              Truck
            </a>
            <a className="font-bold" href="#faq">
              FAQ
            </a>
          </ul>
          <div className="flex items-start flex-col mobileMax:items-center mobileMax:mb-8">
            <span className="flex items-center gap-x-2">
              <img src="" className="w-5 h-5" alt="" />
              <p>Uzbekistan, Andijon, Yoshlik kocha</p>
            </span>
            <span className="flex items-center gap-x-2">
              <img src="" className="w-5 h-5" alt="" />
              <p>Uzbekistan, Andijon, Yoshlik kocha</p>
            </span>
            <span className="flex items-center gap-x-2">
              <img src="" className="w-5 h-5" alt="" />
              <p>Uzbekistan, Andijon, Yoshlik kocha</p>
            </span>
            <span className="flex items-center gap-x-2">
              <img src="" className="w-5 h-5" alt="" />
              <p>Uzbekistan, Andijon, Yoshlik kocha</p>
            </span>
            <ul className="mt-4 flex items-center gap-x-3">
              <li className="p-3 border rounded-full flex items-center justify-center">
                <img src={facebook} className="w-5 h-5" alt="" />
              </li>
              <li className="p-3 border rounded-full flex items-center justify-center">
                <img src={Instagram} className="w-5 h-5" alt="" />
              </li>
              <li className="p-3 border rounded-full flex items-center justify-center">
                <img src={Twitter} className="w-5 h-5" alt="" />
              </li>
              <li className="p-3 border rounded-full flex items-center justify-center">
                <img src={YouTube} className="w-5 h-5" alt="" />
              </li>
            </ul>
          </div>
          
        </div>
        <ul className="tabletMax:flex items-start justify-evenly mb-4 hidden  ">
            <a className="font-bold uppercase" href="#about">
              About
            </a>
            <a className="font-bold uppercase" href="#services">
              Services
            </a>
            <a className="font-bold uppercase" href="#truckTypes">
              Truck
            </a>
            <a className="font-bold uppercase" href="#faq">
              FAQ
            </a>
            
            
          </ul>
      </div>
      {/* <div className="bg-slate-950 py-2">
        <div className="myContainer flex items-center justify-between  text-white">
                <p>2023 "Sapphire Logistics" barcha huquqlar himoyalangan</p>
                <span className="flex items-center gap-x-1">
                    <p>Creators by </p>
                    <a href="https:t.me/NTFGroups">NTF Groups</a>
                </span>
            </div>
        </div> */}
    </div>
  );
};

export default Footer;
