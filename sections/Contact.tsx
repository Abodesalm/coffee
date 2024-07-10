import Btn from "@/components/Btn";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="pad " id="contact">
      <div className="h-[460px] lg:h-[600px] md:h-[700px] back px-[4rem] md:px-[3rem] py-[2rem] pb-[4rem] flex flex-row lg:flex-col justify-between items-center ">

        <div className="flex flex-col justify-center md:justify-start md:w-[90%] gap-4 ">
          <h2 className="xl:text-[40px] lg:text-[30px]">Contact us</h2>
          <div className="flex flex-col lg:flex-row md:flex-col justify-center gap-5">
            <div>
              <h4 className="lg:text-[16px]">Email :</h4>
              <p className="text-[13px] lg:text-[10px] font-normal">example@example.com</p>
            </div>
            <div>
              <h4 className="lg:text-[16px]">Phone :</h4>
              <p className="text-[13px] lg:text-[10px] font-normal">+963 997 203 291</p>
            </div>
            <div>
              <h4 className="lg:text-[16px]">Address :</h4>
              <p className="text-[13px] lg:text-[10px] font-normal">Address somewhere in the left side of<br/>the store in that place u go.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-center gap-6 mt-[6rem] lg:mt-10 ">
          <input type="text" placeholder="name" className="input"/>
          <input type="text" placeholder="last name" className="input"/>
          <input type="email" placeholder="email" className="input"/>
          <input type="password" placeholder="password" className="input"/>
          <Btn clas="md:text-[10px]">submit now</Btn>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center w-1/3 lg:w-[70%] md:w-full h-[70%] mt-8 -mr-20 ml-10 lg:mr-0 lg:ml-0">
          <Link href='/' className="w-[50px] h-[50px]  border border-2 flex justify-center items-center rounded-full border-main transition text-[14px] font-bold "><BsFacebook className="text-white text-[18px]"/></Link>
          <Link href='/' className="w-[50px] h-[50px]  border border-2 flex justify-center items-center rounded-full border-main transition text-[14px] font-bold "><BsInstagram className="text-white text-[18px]"/></Link>
          <Link href='/' className="w-[50px] h-[50px]  border border-2 flex justify-center items-center rounded-full border-main transition text-[14px] font-bold "><BsTwitter className="text-white text-[18px]"/></Link>
          <Link href='/' className="w-[50px] h-[50px]  border border-2 flex justify-center items-center rounded-full border-main transition text-[14px] font-bold "><BsYoutube className="text-white text-[18px]"/></Link>
        </div>
      </div>
    </div>
  )
}
