import { useState } from "react";
import {
  crossBordering,
  crossDock,
  expedited,
  FTL,
  LTL,
  WareHousing,
  AirplaneSectionImg,
  LandTruck,
  ExpeditedImg,
  WareHousingImg,
  CrossDockImg,
  CrossBorderingImg,
} from "../assets";
import { ServicesEl } from "../components";

const navbarData = [
  { id: 1, name: "FTL", img: FTL, link: "ftl" },
  { id: 2, name: "LTL", img: LTL, link: "ltl" },
  { id: 3, name: "EXPEDITED", img: expedited, link: "expedited" },
  { id: 4, name: "WAREHOUSING", img: WareHousing, link: "warehousing" },
  { id: 5, name: "CROSS DOCK", img: crossDock, link: "crossDock" },
  {
    id: 6,
    name: "CROSS BORDERING",
    img: crossBordering,
    link: "crossBordering",
  },
];
const changeTransport = [
  {
    id: 1,
    title: "FTL (Full Truck Load) Services",
    text: "Maximize efficiency with our FTL (Full Truck Load) services tailored for substantial cargo and exclusive truck use. Experience seamless, dedicated transport as your shipment occupies the entire truck, ensuring direct, non-stop transit. Benefit from speed, security, and personalized service. Trust us for precision and commitment in meeting your transportation needs.",
    img: AirplaneSectionImg,
  },
  {
    id: 2,
    title: "LTL (Less Than a Truckload) Services",
    text: "Get a customized quote today and discover the benefits of less-than-truckload freight services and maximize growth and profits for any supply chain network.",
    img: LandTruck,
  },
  {
    id: 3,
    title: "Our Expedited Logistics Solutions",
    text: "Dealing with time-sensitive shipments? Recognize the profound impact even the slightest delays can have. Explore the advantages of our expedited freight and logistics services today!",
    img: ExpeditedImg,
  },
  {
    id: 4,
    title: "Effortless Logistics with Streamlined Warehousing.",
    text: "Enhance logistics with our warehousing solutions: FTL for efficiency, customizable LTL for optimized supply chains, and expedited options for time-sensitive shipments. Trust us for precision, commitment, and growth-maximizing warehousing experiences.",
    img: WareHousingImg,
  },
  {
    id: 5,
    title: "Cross-Docking Mastery for Swift Logistics",
    text: "Embark on a seamless cross-border journey with our logistics expertise. Navigate international shipments effortlessly, ensuring a swift transition. Trust our precision and unwavering commitment for a seamless global connection. Explore the advantages of our cross-border logistics solutions and redefine global connectivity.",
    img: CrossDockImg,
  },
  {
    id: 6,
    title: "North-American Cross-Border Supply Chain Solutions",
    text: "Explore innovative supply chain solutions with Sapphire Transportation's cross-border logistics in North America. We ensure swift and reliable freight services across the U.S. and Canada, providing seamless efficiency and unmatched reliability.",
    img: CrossBorderingImg,
  },
];
const FreightServices = () => {
  const [name, setName] = useState("ftl");
  return (
    <div className="advantages pt-48 pb-20 mobileMax:pb-10 " id="services">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex justify-center flex-col">
        <h1 className="text-center text-[40px] font-bold mb-3 mobileLg:text-[30px] mobileMd:text-[26px]">
          Our Services
        </h1>
        <ul className="flex items-center justify-center gap-x-3">
          {navbarData.map((e) => {
            const { id, name, img, link } = e;
            return (
              <span
                onClick={() => setName(link)}
                key={id}
                className={`flex cursor-pointer items-center flex-col w-full max-w-[150px] bg-white bg-opacity-30 backdrop-filter backdrop-blur-md py-3 mobileMax:py-1`}
              >
                <img
                  src={img}
                  className="w-14 bg-center h-14 tabletMax:w-8 tabletMax:h-8 mobileMax:w-6 mobileMax:h-6 mobileLg:w-6 mobileLg:h-6"
                />
                <p className="tabletMax:text-xs text-center mobileMax:text-[11px] mobileLg:hidden">
                  {name}
                </p>
              </span>
            );
          })}
        </ul>
        <hr className="mb-3" />
        {/* <ServicesEl/> */}
        {name === "ftl" ? (
          <ServicesEl data={changeTransport[0]} />
        ) : name === "ltl" ? (
          <ServicesEl data={changeTransport[1]} />
        ) : name === "expedited" ? (
          <ServicesEl data={changeTransport[2]} />
        ) : name === "warehousing" ? (
          <ServicesEl data={changeTransport[3]} />
        ) : name === "crossDock" ? (
          <ServicesEl data={changeTransport[4]} />
        ) : name === "crossBordering" ? (
          <ServicesEl data={changeTransport[5]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FreightServices;
