import React from 'react'

const Input = ({placeholder, type}) => {
  return (
    <input className='w-full h-16 rounded-[10px] border border-black bg-inherit text-black pl-2 mobileLg:h-12 mobileMd:h-10 mobileMd:placeholder:text-[10px]' placeholder={placeholder} type={type} />
  )
}

export default Input