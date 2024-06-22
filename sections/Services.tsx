import Btn from "@/components/Btn"
import Link from "next/link"
import { BsChevronRight } from "react-icons/bs"

export default function Services() {

  const classs = 'w-[275px] h-[360px] back bord-1 flex flex-col items-center justify-evenly  xl:w-[200px] xl:h-[300px]   '
  const BtnClass = ' w-[50px] h-[50px] xl:w-[40px] xl:h-[40px] border-[3px] xl:border-[2px] flex justify-center items-center rounded-full border-main transition text-[14px] font-bold '

  return (
    <div className="pad min-h-[500px] flex flex-col items-center " id="service">
      <h2>Our Services</h2>
      <div className="flex flex-row lg:flex-wrap w-[100%] mt-8 justify-between lg:justify-around lg:gap-8">

        <div className={classs}>
          <div className="img1"></div>
          <h4 className="xl:text-[18px]">Coffee and tea</h4>
          <Link href='/' className={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Link>
        </div>

        <div className={classs}>
          <div className="img2"></div>
          <h4 className="xl:text-[18px]">brewers equipment</h4>
          <Link href='/' className={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Link>
        </div>

        <div className={classs}>
          <div className="img3"></div>
          <h4 className="xl:text-[18px]">paper, janitorial</h4>
          <Link href='/' className={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Link>
        </div>
        
        <div className={classs}>
          <div className="img4"></div>
          <h4 className="xl:text-[18px]">food & beverage</h4>
          <Link href='/' className={BtnClass}><BsChevronRight className="text-white text-[20px]"/></Link>
        </div>

      </div>
    </div>
  )
}
