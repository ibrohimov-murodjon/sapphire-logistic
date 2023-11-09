import {
  AboutSlide1,
  MessageIcon,
  ProposalIcon,
  TruckIcon,
  PackageIcon,
} from "../assets";
import { Button } from "../components";

const processData = [
  {
    id: 1,
    text: "Submit your request and enter the shipment details",
    img: MessageIcon,
  },
  {
    id: 2,
    text: "We examine your request and propose several effective solutions",
    img: ProposalIcon,
  },
  {
    id: 3,
    text: "You choose the most suitable solution and we provide the carrier",
    img: TruckIcon,
  },
  {
    id: 4,
    text: "Your freight is delivered",
    img: PackageIcon,
  },
];
const Process = () => {
  return (
    <section className="w-full lightBlue py-[120px] mobileMax:py-[80px]">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-between maxSm:flex-col maxSm:gap-16">
        <div className="maxSm:flex maxSm:items-center maxSm:justify-center maxSm:flex-col">
          <h2 className="text-[42px] font-bold text-black mobileMax:text-center">How does it work</h2>
          <p className="text-black text-base w-full max-w-[450px] pt-4 pb-12 mobileMax:text-center">
            We know that organizing an efficient freight shipping in a limited
            time frame may challenge enough. So, we undertake this task from
            start to finish: planning the most suitable route, selecting the
            transportation mode, and careful freight handling (loading and
            unloading)
          </p>
          <a
            href="#"
            className="bg-[#5D3E85] py-6 px-8 rounded-lg text-base font-medium"
          >
            Contact Us
          </a>
          {/* <Button
            title="Get Started"
            width="200px"
            padding="py-6 px-4"
            textClr="white"
          /> */}
        </div>
        <div>
          <div class="v-progress">
            <ul>
              {processData.map((item) => (
                <li
                  className="v-progress-item completed flex items-center"
                  key={item.id}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-[64px] h-[64px] mr-8 ml-16"
                  />
                  <h3 className="text-lg text-black font-medium w-full max-w-[350px] mobileLg:text-base ">
                    {item.text}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    // <div className="w-full lightBlue py-20">
    //   <div className="myContainer mx-auto flex flex-col items-center">
    //     <h1 className="text-center  text-[40px] text-black font-bold w-full max-w-[600px] mb-10">
    //       Out Priority is to transport with care and responsibility
    //     </h1>
    //     <ul className="flex items-center flex-wrap justify-between gap-4">
    //       {processData.map((element) => {
    //         const { id, title, text, img } = element;
    //         return (
    //           <div
    //             className="relative flex items-center flex-col text-center w-full max-w-[250px]"
    //             key={id}
    //           >
    //             <img
    //               src={img}
    //               className="rounded-full w-[150px] h-[150px] border-[7px] border-[#fdeeb3]"
    //               alt=""
    //             />
    //             <p className="absolute top-0 left-[50px] py-2 px-3 bg-[#ffdb53] rounded-full">
    //               0{id}
    //             </p>
    //             <h3 className="mt-6 mb-3 font-bold capitalize text-[20px] text-black">
    //               {title}
    //             </h3>
    //             <p className="text-gray-400 w-full">{text}</p>
    //           </div>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Process;
