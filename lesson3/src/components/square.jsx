import { useState } from "react"

const Square = ({value,position,handlePlay})=>{
   const squareHandlePlay = ()=>{
    if(!value){
        handlePlay(position)
    }
   }

    return <>
    <button
        onClick={squareHandlePlay}
        className="w-[70px] h-[70px] bg-[#14bdac] text-3xl text-white">
        {value}
    </button>
</>

}
export default Square