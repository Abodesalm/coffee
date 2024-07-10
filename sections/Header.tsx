import Btn from "@/components/Btn";
import Image from "next/image";
import image1 from "../public/images/coffee.png"


export default function Header() {
  return (
    <div className="pad min-h-[640px] lg:min-h-[550px] flex flex-col items-center " id="header">
      <div className="flex flex-row md:flex-col w-full mt-20 items-center justify-between md:items-start md:mt-8 ">
        <div className="mb-32 md:mb-0">
          <h1 className=" space mb-7 md:text-[72px]">COFFEE</h1>
          <h3 className=" space text-[37px] mb-8 md:text-[27px]">Service for office<br/>breakrooms, and<br/>free delivery</h3>
          <Btn clas="ms-2">Shop Now</Btn>
        </div>
        <div className="md:self-end md:-mt-10 ">
          <Image src={image1} alt='cup of coffee' width={500} className="md:w-[200px] "/>
        </div>
      </div>
      <div className="-mt-10 md:mt-0">
        number <span className="text-main font-extrabold">1</span>
      </div>
    </div>
  )
}
