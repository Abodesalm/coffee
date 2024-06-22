"use client"
import { useState } from "react"


export default function Collapse({text, title}) {
  const [stat, setStat] = useState(false)
  const chooseIcon=()=>{
    if(stat){
      return '-'
    }else{
      return '+'
    }
  }
  const click =()=>{setStat(!stat)}
  const classs =()=>{
    if(stat==false){
      return 'bg-main '
    }
  }
  return (
    <div className="w-[90%] min-h-[75px] back flex flex-row justify-between items-center overflow-hidden pl-4">
      <div className="py-5 w-[100%] space-y-4">
        <h4 className="lg:text-[15px]">{title}</h4>
        {stat==true&&
          <div className="h-[fit-content] w-[90%] transition"><p className="font-normal text-[15px] lg:text-[11px]">{text}</p></div>
        }
      </div>
      <div className={classs()+'  cursor-pointer text-[40px] flex justify-center items-center transition h-[75px] w-[75px]'} onClick={click}>
        {chooseIcon()}
      </div>
    </div>
  )
}
