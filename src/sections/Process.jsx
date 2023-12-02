import {
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
          <h2 className="text-[42px] font-bold text-black mobileMax:text-center">
            How does it work
          </h2>
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
        </div>
        <div>
          <div className="v-progress">
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
  );
};

export default Process;
