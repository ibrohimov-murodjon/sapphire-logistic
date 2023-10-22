import { CallOperator, logo } from "../assets"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav>
    <div className="myContainer mx-auto flex items-center justify-between" >
    <a href="#">
        <img src={logo} className="w-30 h-12" alt="" />
    </a>
    <ul className="flex items-center gap-x-5">
    <li><a href="#home" className="text-white">Home</a></li>
    <li><a href="#services" className="text-white">Services</a></li>
    <li><a href="#team" className="text-white">Team</a></li>
    <li><a href="#blog" className="text-white">Blog</a></li>
    <li><a href="#contact" className="text-white">Contact</a></li>
    </ul>
    <div className="flex items-center gap-x-16">
    <div className="flex items-center w-full max-w-[200px] gap-x-3">
        <img src={CallOperator} className="w-14 h-14 p-3 rounded-full bg-gray-300" alt="" />
        <span className="flex items-center flex-col w-full max-w-[150px]">
            <h6 className="w-full max-w-[150px]">Call Us anytime</h6>
            <a className="w-full max-w-[150px]" href="tel:+998941213399">+998 94 1213399</a>
        </span>
    </div>
    <Button bgColor='green' title='Request a quote'/> 
    </div>
    </div>
    </nav>
  )
}

export default Navbar