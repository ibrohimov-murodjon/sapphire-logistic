import React from 'react'
import { Button } from '../components'

const Sender = () => {
  return (
    <div className='sender_section '>
        <div className="myContainer w-full mx-auto flex items-center justify-center flex-col py-20">
            <h1 className='capitalize text-[40px] font-bold '>Are you a Sender</h1>
            <p className='text-[20px] w-full max-w-[580px] text-center my-3'>Sapphire Air freight service deliver the knowledge & opportunity to optimize every mile on every lane.Get full-service.</p>
            <Button title='Contact Us' bgColor='transparent' color='black' />
        </div>
    </div>
  )
}

export default Sender