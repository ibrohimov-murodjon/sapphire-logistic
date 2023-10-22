import { AboutSlide1, AboutSlide2, AboutSlide3, AboutSlide4, AboutSlide5 } from "../assets"


const AboutData = [
    {id:1, img:AboutSlide1},
    {id:2, img:AboutSlide2},
    {id:3, img:AboutSlide3},
    {id:4, img:AboutSlide4},
    {id:5, img:AboutSlide5},
    {id:6, img:AboutSlide1},
    {id:7, img:AboutSlide2},
    {id:8, img:AboutSlide3},
    {id:9, img:AboutSlide4},
    {id:10, img:AboutSlide5},
    {id:11, img:AboutSlide1},
    {id:12, img:AboutSlide2},
    {id:13, img:AboutSlide3},
    {id:14, img:AboutSlide4},
    {id:15, img:AboutSlide5},
    {id:15, img:AboutSlide1},
    {id:17, img:AboutSlide2},
    {id:43, img:AboutSlide3},
    {id:44, img:AboutSlide4},
    {id:55, img:AboutSlide5},
]


const About = () => {
  return (
    <div className="about pt-20 pb-11  relative h-[600px]">
   <div className="myContainer flex items-start justify-around">
   <div className="flex items-center flex-col">
        <img src='' className="w-[300px] h-[200px] border" alt="about Truck" />
        <span className="flex items-start flex-col mt-6">
        <h3 className="font-bold text-[30px]">
            Discover Sapphire
        </h3>
        <p className="text-[17px] font-semibold w-full max-w-[220px]">
            24/7 customer and expert advice from dedicated transportation managers & team
        </p>
        </span>
    </div>
    <div className="flex items-start flex-col" >
        <h1 className="text-[40px] font-bold w-full max-w-[730px] leading-[50px]">Whatever your logistic needs, We are ready to meet your requirements.</h1>
        <p className="text-[17px] w-full max-w-[550px]">Sapphire Truckload service delivers the knowledge and opportunity to optimize every mile on every lane.</p>
        <ul className="flex items-center gap-x-[30px] mt-14 flex-wrap">
            <li>
                <h2 className="text-[80px] font-bold ">50k</h2>
                <hr className="bg-black border-[black]" />
                <p className="text-[15px] font-semibold mt-1">Customers successfully served </p>
            </li>
            <li>
                <h2 className="text-[80px] font-bold ">2M+</h2>
                <hr className="bg-black border-[black]" />
                <p className="text-[15px] font-semibold mt-1">Customers successfully served </p>
            </li>
            <li>
                <h2 className="text-[80px] font-bold ">356</h2>
                <hr className="bg-black border-[black]" />
                <p className="text-[15px] font-semibold mt-1">Customers successfully served </p>
            </li>
        </ul>
    </div>
   
   </div>
   <marquee className="absolute bottom-[-100px] w-full"
  direction="left"
>
  <ul className="flex items-center gap-12 w-full">
    {AboutData.map((element) => {
        return(
            <>
             <img src={element.img} className="w-[400px] h-[170px] rounded-[15px] object-cover"  alt="sliders" />
             </>
        )
    })}
  </ul>
</marquee>
    </div>
  )
}

export default About