import { CallImgWhite, EmailIcon, Location, LocationWhite } from "../assets";
import { Button, Input } from "../components";

const Contact = () => {
  return (
    <div className="advantages py-10" id="contact">
      <div className="myContainer mx-auto flex items-center justify-around tabletMax:flex-col tabletMax:gap-y-5">
        <div className="flex items-start justify-center flex-col gap-y-3 w-full max-w-[500px]">
          <h1 className="text-white text-[50px] font-bold">Contact US</h1>
          <span className="flex flex-col items-start justify-center">
            <img src={CallImgWhite} className="w-8 h-8 mb-2" alt="" />
            <h4 className=" font-bold text-[20px]">Phone Number</h4>
            <p>+1 469 998 8555</p>
          </span>
          <span className="flex flex-col items-start justify-center">
            <img src={EmailIcon} className="w-8 h-8 mb-2" alt="" />
            <h4 className=" font-bold text-[20px]">Email</h4>
            <p>recruiting@unitedbrother.us</p>
          </span>
          <span className="flex flex-col items-start justify-center">
            <img src={LocationWhite} className="w-8 h-8 mb-2" alt="" />
            <h4 className=" font-bold text-[20px]">Location</h4>
            <p>New York</p>
          </span>
        </div>
        <div className="flex rounded-[10px] flex-col lightBlue w-full max-w-[600px] py-10 px-14 mobileMax:max-w-[500px] mobileLg:max-w-[400px] mobileLg:px-8 mobileMd:max-w-[350px] mobileMd:px-4  mobileSm:max-w-[320px]">
          <h1 className="text-black text-[40px] font-bold mb-2 mobileMax:text-[35px] mobileLg:text-[30px] mobileLg:mb-8 mobileMd:mb-4 mobileMd:text-[25px]">
            Request to Contact
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <Input placeholder="Phone Number *" type="text" />
            <Input placeholder="Email *" type="email" />
          </div>
          <textarea
            placeholder="How can we help?"
            cols="30"
            rows="7"
            className="rounded-[10px] border border-[#C8354B] mb-4 p-4 text-gray-800 bg-inherit"
          ></textarea>
          <span className="mobileMax:flex items-center justify-center">
      <Button title='Get Help' bgColor="#3E4095" />
      </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
