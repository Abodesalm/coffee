import Btn from "@/components/Btn";
import Image from "next/image";
import Link from "next/link";
import logo from '../public/images/coffee-logo.png'

export default function Navbar() {
  return (
    <nav className="h-[100px] pad flex flex-row justify-between items-center">
      <div className="">
        <Image src={logo} alt="logo" width={80}/>
      </div>

      <div className="flex flex-row w-1/2 justify-around items-center nav-links">
        <Btn status="link" clas="xl:text-[12px]" to='#header'>Home</Btn>
        <Btn status="link" clas="xl:text-[12px]" to='#about'>About</Btn>
        <Btn status="link" clas="xl:text-[12px]" to='#service'>Service</Btn>
        <Btn status="link" clas="xl:text-[12px]" to='#faqs'>Faqs</Btn>
        <Btn status="link" clas="xl:text-[12px]" to='#contact'>Contact</Btn>
      </div>

      <div className="flex flex-row w-[25%] lg:w-[50%] md:w-[75%] justify-around items-center">
        <p className="xl:text-[12px]">+963 997 203 291</p>
        <Btn clas="xl:text-[10px] xl:px-[0.75rem]" to={'#header'} >Get In Touch</Btn>
      </div>
    </nav>
  )
}
