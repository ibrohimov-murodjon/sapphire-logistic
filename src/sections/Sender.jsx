import React from 'react'
import { Button } from '../components'

const Sender = () => {
  return (
    <div className="sender_section relative">
      <div className="absolute w-full h-full z-[1] bg-bgVideo"></div>
      <div className="mx-auto w-full max-w-[1246px] px-[20px] z-[10] flex items-center justify-center flex-col py-20 ">
        <h1 className="capitalize text-[40px] font-bold z-[10] mobileMd:text-center mobileMd:text-[30px]">
          Are you a Sender
        </h1>
        <p className="text-[20px] w-full max-w-[580px] z-[10] text-center my-3 mobileMd:text-center mobileMd:text-[15px]">
          Sapphire Air freight service deliver the knowledge & opportunity to
          optimize every mile on every lane.Get full-service.
        </p>
        <Button title="Contact Us" bgColor="#5D3E85" color="#fff" />
      </div>
    </div>
  );
}

export default Sender