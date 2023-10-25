import { useState } from "react"
import { MinusIcon, PlusIcon } from "../assets"


const FaqQuestions = ({response, question}) => {
    const [info, setInfo ] = useState(false)
    const handleClick = () => {
    setInfo(!info)
    }
  return (
    <div className="flex flex-col">
    <div className="flex items-center w-full max-w-[650px] gap-x-5 bg-[#293436] p-3">
        <h1 className="font-bold text-white">{question}</h1>
       <span className="p-2 bg-[#f7c502] rounded-full" onClick={() => handleClick()}> <img src={!info ? PlusIcon : MinusIcon} className="h-5 w-5"  /></span>
    </div>
    <div className={`${!info ? 'hidden' : 'block'} text-white w-full max-w-[430px] mt-3 mb-4 pl-4`}>{response}</div>
    <hr />
    </div>
  )
}

export default FaqQuestions