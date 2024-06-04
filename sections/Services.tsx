import Btn from "@/components/Btn"
import { BsChevronRight } from "react-icons/bs"

export default function Services() {

  const classs = 'w-[275px] h-[360px] back bord-1 flex flex-col items-center justify-evenly '
  const BtnClass = ' w-[50px] h-[50px] border-[3px] flex justify-center items-center '

  return (
    <div className="pad h-[500px] flex flex-col items-center " id="service">
      <h2>Our Services</h2>
      <div className="flex flex-row w-[100%] mt-8 justify-between">

        <div className={classs}>
          <div className="img1"></div>
          <h4>Coffee and tea</h4>
          <Btn clas={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Btn>
        </div>

        <div className={classs}>
          <div className="img2"></div>
          <h4>brewers equipment</h4>
          <Btn clas={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Btn>
        </div>

        <div className={classs}>
          <div className="img3"></div>
          <h4>paper, janitorial</h4>
          <Btn clas={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Btn>
        </div>
        
        <div className={classs}>
          <div className="img4"></div>
          <h4>food & beverage</h4>
          <Btn clas={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Btn>
        </div>

      </div>
    </div>
  )
}
