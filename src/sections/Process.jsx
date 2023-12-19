import { Slide, Zoom } from "react-awesome-reveal";
import {
  MessageIcon,
  ProposalIcon,
  TruckIcon,
  PackageIcon,
  TailoredSolution,
} from "../assets";
import { Button } from "../components";

const processData = [
  {
    id: 1,
    text: "Choose Your Optimal Truck Type and Get Instant Pricing",
    img: TruckIcon,
  },
  {
    id: 2,
    text: "Share Your Shipment Details",
    img: ProposalIcon,
  },
  {
    id: 3,
    text: "Tailored Solutions Proposal",
    img: TailoredSolution,
  },
  {
    id: 4,
    text: "Your Cargo is En Route",
    img: PackageIcon,
  },
];
const Process = () => {
  return (
    <section className="w-full lightBlue py-[120px] mobileMax:py-[80px]">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-between maxSm:flex-col maxSm:gap-16">
        <div className="maxSm:flex maxSm:items-center maxSm:justify-center maxSm:flex-col">
          <Slide direction="left" duration={2500}>
            <h2 className="text-[42px] font-bold text-black mobileMax:text-center">
              How it Works with Us
            </h2>
          </Slide>
          <Slide direction="left" duration={2700}>
            <p className="text-black text-base w-full max-w-[450px] pt-4 pb-12 mobileMax:text-center">
              Coordinating logistics with precision is crucial, especially when
              time is a critical factor. At Sapphire, we simplify the process,
              ensuring a smooth journey for your shipments from the initial
              inquiry to the final destination.
            </p>
          </Slide>
          <a
            href="#contact"
            className="bg-[#3E4095] py-6 px-8 rounded-lg text-base font-medium"
          >
            Contact Us
          </a>
        </div>
        <div>
          <div className="v-progress">
            <ul>
              {processData.map((item) => (
                <li
                  className="v-progress-item completed flex items-center"
                  key={item.id}
                >
                  <Zoom>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[64px] h-[64px] mr-8 ml-16"
                    />
                  </Zoom>
                  <Slide direction="right" duration={2700}>
                    <h3 className="text-lg text-black font-medium w-full max-w-[350px] mobileLg:text-base ">
                      {item.text}
                    </h3>
                  </Slide>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
