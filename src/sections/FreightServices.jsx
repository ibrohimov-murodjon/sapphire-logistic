import { useState } from "react";
import {
  AirPlaneImg,
  AirplaneSectionImg,
  LandTruck,
  ShipImg,
  TrainImg,
  TruckLogo,
  WareHousing,
} from "../assets";
import { ServicesEl } from "../components";


const navbarData = [
  { id: 1, name: "Air Freight", img: AirPlaneImg, link:"airplane" },
  { id: 2, name: "Rail Freight", img: TrainImg, link:"train" },
  { id: 3, name: "LTL Freight", img: TruckLogo, link:"ltl" },
  { id: 4, name: "Sea Freight", img: ShipImg, link: "ship" },
  { id: 5, name: "Land Freight", img: LandTruck, link:"land" },
  { id: 6, name: "Warehousing", img: WareHousing, link:"warehouse" },
];
const changeTransport = [
     {  id:1, 
        title: 'Get Secured Sapphire Air Freight Experience', 
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis minus earum fugit distinctio totam nulla neque cupiditate, aut unde officia sed maxime nemo sint dolores",
        advantage:[
            {id:1, title:"Intermodal Shipping"},
            {id:2, title:"Intermodal Shipping"},
            {id:3, title:"Intermodal Shipping"},
            {id:4, title:"Intermodal Shipping"},
            {id:5, title:"Intermodal Shipping"},
            {id:6, title:"Intermodal Shipping"}
        ],
        img: AirplaneSectionImg,
},
{  id:2, 
    title: 'Get Secured Sapphire poyezd Freight Experience', 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis minus earum fugit distinctio totam nulla neque cupiditate, aut unde officia sed maxime nemo sint dolores",
    advantage:[
        {id:1, title:"Intermodal Shipping"},
        {id:2, title:"Intermodal Shipping"},
        {id:3, title:"Intermodal Shipping"},
        {id:4, title:"Intermodal Shipping"},
        {id:5, title:"Intermodal Shipping"},
        {id:6, title:"Intermodal Shipping"}
    ],
    img: ShipImg,
}
];
const FreightServices = () => {
    const [name, setName ] = useState('airplane')
  return (
    <div className="bg-white py-12">
      <div className="myContainer mx-auto flex justify-center flex-col">
        <h1 className="text-center text-[40px] font-bold mb-3">
          Freight Services
        </h1>
        <ul className="flex items-center justify-center gap-x-3">
          {navbarData.map((e) => {
            const { id, name, img, link } = e;
            return (
              <span
                onClick={() => setName(link)}
                key={id}
                className="flex items-center flex-col w-full max-w-[150px] bg-yellow-300 py-3 hover:scale-[1.02] active:scale-[0.99]"
              >
                <img src={img} className="w-10 h-10" />
                <p>{name}</p>
              </span>
            );
          })}
        </ul>
        <hr className="mb-3" />
        {name === 'airplane' ? <ServicesEl data={changeTransport[0]}/> :  name === 'train' ? <ServicesEl data={changeTransport[1]}/> : '' }
      </div>
    </div>
  );
};

export default FreightServices;