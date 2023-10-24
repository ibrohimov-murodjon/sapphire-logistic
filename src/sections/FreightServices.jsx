import { AirPlaneImg, AirplaneSectionImg, CallImg, CallOperator, LandTruck, RightArrow, ShipImg, TrainImg, TruckLogo, WareHousing } from "../assets"
import { Button } from "../components"


const navbarData = [
    {id: 1, name: "Air Freight", img:AirPlaneImg},
    {id: 2, name: "Rail Freight", img:TrainImg},
    {id: 3, name: "LTL Freight", img:TruckLogo},
    {id: 4, name: "Sea Freight", img:ShipImg},
    {id: 5, name: "Land Freight", img:LandTruck},
    {id: 6, name: "Warehousing", img:WareHousing}
]
const FreightServices = () => {
  return (
    <div className="bg-white py-12">
    <div className="myContainer mx-auto flex justify-center flex-col">
    <h1 className="text-center text-[40px] font-bold mb-3">Freight Services</h1>
    <ul className="flex items-center justify-center gap-x-3">
    {navbarData.map((e) => {
        const { id, name, img } = e
        return(
            <span key={id} className="flex items-center flex-col w-full max-w-[150px] bg-yellow-300 py-3">
                <img src={img} className="w-10 h-10" />
                <p>{name}</p>
            </span>
        )
    })}
    </ul>
    <hr className="mb-3"/>
    <div className="flex items-start justify-around mt-9">
        <img src={AirplaneSectionImg} className='w-[480px] h-[370px]' alt="" />
        <span>
        <p className="uppercase ">Explore Sapphire Features</p>
        <h3 className="font-bold text-[25px] w-full max-w-[350px] mb-3 leading-7">Get Secured Sapphire Air Freight Experience</h3>
        <p className="w-full max-w-[450px] text-[17px] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis minus earum fugit distinctio totam nulla neque cupiditate, aut unde officia sed maxime nemo sint dolores! </p>
        <span className="flex items-center justify-between my-2">
            <small>
                <li className="list-none flex items-center gap-x-1">
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">Intermodal shipping</h6>
                </li>
                <li className="list-none flex items-center gap-x-1">
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">Intermodal shipping</h6>
                </li>
                <li className="list-none flex items-center gap-x-1">
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">Intermodal shipping</h6>
                </li>
            </small>
            <small>
                <li className="list-none flex items-center gap-x-1">
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">Intermodal shipping</h6>
                </li>
                <li className="list-none flex items-center gap-x-1">
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">Intermodal shipping</h6>
                </li>
                <li className="list-none flex items-center gap-x-1">
                <img src={RightArrow} className="h-5 w-5" alt="" />
                <h6 className="font-bold text-[14px]">Intermodal shipping</h6>
                </li>
            </small>
        </span>
        <hr className="my-7" />
        <span className="flex justify-around">
        <Button title='Get A Quote' bgColor='transparent' color='black'/>
        <span className="flex items-center gap-x-2">
           <span className="bg-[#f7c503] rounded-full p-3">
           <img src={CallImg} className='w-6 h-5  ' />
           </span>
            <small className="flex flex-col items-start ">
                <h6 className="font-bold text-[17px]">Have Questions?</h6>
                <a className="text-gray-600 text-[17px]" href="tel:+998941213399">+998941213399</a>
            </small>
        </span>
        </span>
        </span>
    </div>
    </div>
    </div>
  )
}

export default FreightServices