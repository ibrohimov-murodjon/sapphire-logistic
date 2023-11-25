import { useState } from "react";
import {
  crossBordering,
  crossDock,
  expedited,
  FTL,
  LTL,
  WareHousing,
  AirplaneSectionImg,
  LandTruck
} from "../assets";
import { ServicesEl } from "../components";

const navbarData = [
  { id: 1, name: "FTL", img:FTL, link: "ftl" },
  { id: 2, name: "LTL", img: LTL, link: "ltl" },
  { id: 3, name: "EXPEDITED", img: expedited, link: "expedited" },
  { id: 4, name: "WAREHOUSING", img: WareHousing, link: "warehousing" },
  { id: 5, name: "CROSS DOCK", img: crossDock, link: "crossDock" },
  { id: 6, name: "CROSS BORDERING", img: crossBordering, link: "crossBordering" },
];
const changeTransport = [
  {
    id: 1,
    title: "Get Secured Sapphire Air Freight Experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis minus earum fugit distinctio totam nulla neque cupiditate, aut unde officia sed maxime nemo sint dolores",
    // advantage: [
    //   { id: 1, title: "Intermodal Shipping" },
    //   { id: 2, title: "Intermodal Shipping" },
    //   { id: 3, title: "Intermodal Shipping" },
    //   { id: 4, title: "Intermodal Shipping" },
    //   { id: 5, title: "Intermodal Shipping" },
    //   { id: 6, title: "Intermodal Shipping" },
    // ],
    img: AirplaneSectionImg,
  },
  {
    id: 2,
    title: "Get Secured Sapphire poyezd Freight Experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis minus earum fugit distinctio totam nulla neque cupiditate, aut unde officia sed maxime nemo sint dolores",
    // advantage: [
    //   { id: 1, title: "Intermodal Shipping" },
    //   { id: 2, title: "Intermodal Shipping" },
    //   { id: 3, title: "Intermodal Shipping" },
    //   { id: 4, title: "Intermodal Shipping" },
    //   { id: 5, title: "Intermodal Shipping" },
    //   { id: 6, title: "Intermodal Shipping" },
    // ],
    img: LandTruck,
  },
];
const FreightServices = () => {
  const [name, setName] = useState("ftl");
  return (
    <div className="advantages pt-48 pb-20 mobileMax:pb-10 " id="services">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex justify-center flex-col">
        <h1 className="text-center text-[40px] font-bold mb-3 mobileLg:text-[30px] mobileMd:text-[26px]">
          Freight Services
        </h1>
        <ul className="flex items-center justify-center gap-x-3">
          {navbarData.map((e) => {
            const { id, name, img, link } = e;
            return (
              <span
                onClick={() => setName(link)}
                key={id}
                className={`flex items-center flex-col w-full max-w-[150px] bg-white bg-opacity-30 backdrop-filter backdrop-blur-md py-3 mobileMax:py-1`}
              >
                <img src={img} className="w-14 bg-center h-14 tabletMax:w-8 tabletMax:h-8 mobileMax:w-6 mobileMax:h-6 mobileLg:w-6 mobileLg:h-6" />
                <p className="tabletMax:text-xs text-center mobileMax:text-[11px] mobileLg:hidden">{name}</p>
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FreightServices;
