import Btn from "@/components/Btn";
import Image from "next/image";
import image1 from "../public/images/coffee.png"


export default function Header() {
  return (
    <div className="pad h-[640px] lg:h-[550px] flex flex-col items-center " id="header">
      <div className="flex flex-row w-full mt-20 items-center justify-between ">
        <div className="mb-32">
          <h1 className=" space mb-7">COFFEE</h1>
          <h3 className=" space text-[37px] mb-8">Service for office<br/>breakrooms, and<br/>free delivery</h3>
          <Btn clas="ms-2">Shop Now</Btn>
        </div>
        <div>
          <Image src={image1} alt='cup of coffee' width={500}/>
        </div>
      </div>
      <div className="-mt-10">
        number 1
      </div>
    </div>
  )
}
