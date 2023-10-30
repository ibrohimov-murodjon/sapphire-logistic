import { AboutSlide1, facebook } from '../assets'
import { Button, TeamSlider } from '../components'

const Team = () => {
  return (
    <div className="pb-32 pt-48 bg-[#111f22]">
      <div className="mcContainer flex items-center flex-col justify-center ">
        <h1 className="text-center  text-[40px] font-bold w-full max-w-[600px]">
          Meet the core team members who runs Sapphire
        </h1>
        <ul className="flex items-center gap-4  mt-10 mb-10">
          <li className="group relative ">
            <img
              src={AboutSlide1}
              className="h-[350px] w-[250px] relative"
              alt=""
            />
            <span className="absolute hidden items-start flex-col bottom-5 left-[50%] translate-x-[-50%] w-full max-w-[200px] group-hover:flex group-hover:duration-[3s]">
              <ul className=" flex items-center justify-center gap-1 mb-4 flex-wrap ">
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
              </ul>
              <hr className="mb-4 h-1 w-full" />
              <h5 className="font-bold uppercase text-[18px] text-white">
                Maxim Johnson
              </h5>
              <p className="font-bold text-[14px] text-white">
                Head of Operation
              </p>
            </span>
          </li>
          <li className="group relative">
            <img
              src={AboutSlide1}
              className="h-[350px] w-[250px] relative"
              alt=""
            />
            <span className="absolute hidden items-start flex-col bottom-5 left-[50%] translate-x-[-50%] w-full max-w-[200px] group-hover:flex group-hover:duration-[3s]">
              <ul className=" flex items-center justify-center gap-1 mb-4 flex-wrap ">
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
              </ul>
              <hr className="mb-4 h-1 w-full" />
              <h5 className="font-bold uppercase text-[18px] text-white">
                Maxim Johnson
              </h5>
              <p className="font-bold text-[14px] text-white">
                Head of Operation
              </p>
            </span>
          </li>
          <li className="group relative">
            <img
              src={AboutSlide1}
              className="h-[350px] w-[250px] relative"
              alt=""
            />
            <span className="absolute hidden items-start flex-col bottom-5 left-[50%] translate-x-[-50%] w-full max-w-[200px] group-hover:flex group-hover:duration-[3s]">
              <ul className=" flex items-center justify-center gap-1 mb-4 flex-wrap ">
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
              </ul>
              <hr className="mb-4 h-1 w-full" />
              <h5 className="font-bold uppercase text-[18px] text-white">
                Maxim Johnson
              </h5>
              <p className="font-bold text-[14px] text-white">
                Head of Operation
              </p>
            </span>
          </li>
          <li className="group relative">
            <img
              src={AboutSlide1}
              className="h-[350px] w-[250px] relative"
              alt=""
            />
            <span className="absolute hidden items-start flex-col bottom-5 left-[50%] translate-x-[-50%] w-full max-w-[200px] group-hover:flex group-hover:duration-[3s]">
              <ul className=" flex items-center justify-center gap-1 mb-4 flex-wrap ">
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
                <a href="#">
                  <img src={facebook} className="w-8 h-8" alt="" />
                </a>
              </ul>
              <hr className="mb-4 h-1 w-full" />
              <h5 className="font-bold uppercase text-[18px] text-white">
                Maxim Johnson
              </h5>
              <p className="font-bold text-[14px] text-white">
                Head of Operation
              </p>
            </span>
          </li>
        </ul>
        <Button title="Meet full team" bgColor="#ffdb53" color="black" />
        <TeamSlider />
      </div>
    </div>
  );
}

export default Team