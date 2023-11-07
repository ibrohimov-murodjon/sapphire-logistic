import {  CallImgWhite, EmailIcon, Location, LocationWhite } from "../assets"
import { Button, Input } from "../components"

const Contact = () => {
  return (
    <div className="advantages py-10">
      <div className="myContainer mx-auto flex items-center justify-around">
      <div className="flex items-start justify-center flex-col gap-y-3">
      <h1 className="text-white text-[50px] font-bold">Contact US</h1>
      <span className="flex flex-col items-start justify-center">
        <img src={CallImgWhite} className='w-8 h-8 mb-2' alt="" />
        <h4 className=" font-bold text-[20px]">Phone Number</h4>
        <p>+1 469 998 8555</p>
      </span>
      <span className="flex flex-col items-start justify-center">
        <img src={EmailIcon} className='w-8 h-8 mb-2' alt="" />
        <h4 className=" font-bold text-[20px]">Email</h4>
        <p>recruiting@unitedbrother.us</p>
      </span>
      <span className="flex flex-col items-start justify-center">
        <img src={LocationWhite} className='w-8 h-8 mb-2' alt="" />
        <h4 className=" font-bold text-[20px]">Location</h4>
        <p>New York</p>
      </span>
      </div>
      <div className="flex rounded-[10px] flex-col lightBlue w-full max-w-[600px] py-10 px-14">
      <h1 className="text-black text-[40px] font-bold mb-2">Request to Contact</h1>
      <div className="flex items-center gap-4 mb-4">
      <Input placeholder='Phone Number *' type="text"/>
      <Input placeholder='Email *' type="email"/>
      </div>
      <textarea placeholder='How can we help?' cols="30" rows="7" className="rounded-[10px] border border-black mb-4 p-4 text-gray-800 bg-inherit"></textarea>
      <Button title='Get Help' bgColor='blue'/>
      </div>
      </div>
    </div>
  )
}

export default Contact